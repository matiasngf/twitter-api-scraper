import { AxiosInstance } from 'axios'
import { SearchResults } from '../types/searchResults'

export interface SearchQuery {
  terms: string
  dateFrom?: string
  dateTo?: string
  minReplies?: number
  minRetweets?: number
  minFaves?: number
  lang?: string
}

const buildSearchQueryString = (query: SearchQuery): string => {
  let q = ''
  if (query.terms !== undefined) {
    q = query.terms
  }
  if (query.dateFrom !== undefined) {
    q += ` since:${query.dateFrom}`
  }
  if (query.dateTo !== undefined) {
    q += ` until:${query.dateTo}`
  }
  if (query.minReplies !== undefined) {
    q += ` min_replies:${query.minReplies}`
  }
  if (query.minRetweets !== undefined) {
    q += ` min_retweets:${query.minRetweets}`
  }
  if (query.minFaves !== undefined) {
    q += ` min_faves:${query.minFaves}`
  }
  if (query.lang !== undefined) {
    q += ` lang:${query.lang}`
  }

  return q
}

const getSearchParams = (
  query: SearchQuery,
  maxTweets: number,
  pageToken?: string
) => {
  const params: any = {
    include_profile_interstitial_type: 1,
    include_blocking: 1,
    include_blocked_by: 1,
    include_followed_by: 1,
    include_want_retweets: 1,
    include_mute_edge: 1,
    include_can_dm: 1,
    include_can_media_tag: 1,
    skip_status: 1,
    cards_platform: 'Web-12',
    include_cards: 1,
    include_ext_alt_text: true,
    include_quote_count: true,
    include_reply_count: 1,
    tweet_mode: 'extended',
    include_entities: true,
    include_user_entities: true,
    include_ext_media_color: true,
    include_ext_media_availability: true,
    send_error_codes: true,
    simple_quoted_tweet: true,
    q: buildSearchQueryString(query),
    count: maxTweets,
    query_source: 'typed_query',
    pc: 1,
    spelling_corrections: 1,
    ext: 'mediaStats,highlightedLabel'
  }
  if (pageToken) {
    params.cursor = pageToken
  }
  return params
}

const getSearchHeaders = (query: SearchQuery, lang: string) => {
  return {
    Referer: 'https://twitter.com/search?q=' + query.terms + '&src=typed_query',
    'x-twitter-client-language': lang
  }
}

export const clientSearch = async (
  instance: AxiosInstance,
  query: SearchQuery,
  maxTweets: number,
  pageToken?: string
): Promise<SearchResults> => {
  const searchParmas = getSearchParams(query, maxTweets, pageToken)
  const queryUrl = 'https://twitter.com/i/api/2/search/adaptive.json'
  const lang = query.lang || 'en'
  const headers = getSearchHeaders(query, lang)
  // Call api
  const response = await instance.get<SearchResults>(queryUrl, {
    params: searchParmas,
    headers
  })
  return response.data
}
