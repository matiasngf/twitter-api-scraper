import {
  ClientOptionsInterface,
  getInitialOptions
} from './utils/getInitialOptions'
import { AxiosInstance } from 'axios'
import { getApiClientInstance } from './utils/getApiClientInstance'
import { getGuestToken } from './utils/getGuestToken'
import { getBearerToken } from './utils/getBearerToken'
import { clientSearch, SearchQuery } from './utils/clientSearch'
import { ParsedSearchResult, parseSearch } from './utils/parseSearch'
import { SearchResults } from './types/searchResults'

export default class TwitterClient {
  // Options
  expiredToken: boolean
  guestToken: string
  guestTokenUpdatedAt: number
  bearerToken: string
  bearerTokenUpdatedAt: number
  maxRetries: number
  log: boolean
  userAgents: string[]
  language: string

  // Internal
  userAgent: string = ''

  // Clients
  apiClient: AxiosInstance

  constructor(options: ClientOptionsInterface = {}) {
    // options
    this.setOptions(options)

    // apis
    this.apiClient = getApiClientInstance()
    this.getNewUserAgent()
  }

  setOptions = (options: ClientOptionsInterface) => {
    const finalOptions = getInitialOptions(options)
    this.guestToken = finalOptions.guestToken
    this.bearerToken = finalOptions.bearerToken
    this.maxRetries = finalOptions.maxRetries
    this.log = finalOptions.log
    this.userAgents = finalOptions.userAgents
  }

  getNewUserAgent = (): string => {
    const n = this.userAgents.length
    const sel: string | undefined =
      this.userAgents[Math.round(Math.random() * n - 1)]

    const selected =
      sel ||
      'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0'

    this.userAgent = selected
    this.apiClient.defaults.headers['User-Agent'] = selected
    this.say(`Setting new User-Agent: ${selected}`)
    return selected
  }

  getBearerToken = async (): Promise<string> => {
    const token = await getBearerToken(this.userAgent)
    if (token) {
      this.setBearerToken(token)
      return token
    } else {
      throw new Error('Token not found.')
    }
  }

  getGuestToken = async (): Promise<string> => {
    const token = await getGuestToken()
    if (token) {
      this.setGuestToken(token)
      return token
    } else {
      throw new Error('Token not found.')
    }
  }

  setGuestToken = (token: string) => {
    this.guestToken = token
    this.apiClient.defaults.headers['x-guest-token'] = this.guestToken
    this.guestTokenUpdatedAt = Math.floor(Date.now() / 1000)
    this.say('New guest token setted.')
  }

  setBearerToken = (token: string) => {
    this.bearerToken = token
    this.bearerTokenUpdatedAt = Math.floor(Date.now() / 1000)
    this.apiClient.defaults.headers.authorization = `Bearer ${this.bearerToken}`
    this.say('New bearer token setted.')
  }

  connect = async (maxRetries?: number) => {
    this.say('Connecting...')
    const retries = maxRetries || this.maxRetries
    await this.getBearerToken()
    await this.getGuestToken()
    this.say('Connected to twitter')
    return retries
  }

  private say = (message: any) => {
    if (this.log) {
      console.log(message)
    }
  }

  // Search
  search = async (
    query: SearchQuery,
    maxTweets: number = 100,
    pageToken?: string
  ): Promise<ParsedSearchResult> => {
    this.say('Searching...')
    const data = await clientSearch(this.apiClient, query, maxTweets, pageToken)
    const result = parseSearch(data)
    this.say('Searched tweets')
    return result
  }

  searchRaw = async (
    query: SearchQuery,
    maxTweets: number = 100,
    pageToken?: string
  ): Promise<SearchResults> => {
    this.say('Searching...')
    const data = await clientSearch(this.apiClient, query, maxTweets, pageToken)
    this.say('Searched tweets')
    return data
  }
}
