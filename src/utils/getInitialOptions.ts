export interface ClientRequiredOprionsInterface {
  guestToken: string
  bearerToken: string
  maxRetries: number
  log: boolean
  userAgents: string[]
}

export type ClientOptionsInterface = Partial<ClientRequiredOprionsInterface>

export const defaultUserAgents = [
  'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0',
  'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:57.0) Gecko/20100101 Firefox/57.0',
  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0',
  'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:72.0) Gecko/20100101 Firefox/72.0',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 11_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/37.0 Mobile/15E148 Safari/605.1.15',
  'Mozilla/5.0 (iPad; CPU OS 11_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/37.0 Mobile/15E148 Safari/605.1.15'
]

const defaultOptions: ClientRequiredOprionsInterface = {
  guestToken: '',
  bearerToken: '',
  maxRetries: 3,
  log: false,
  userAgents: defaultUserAgents
}

export const getInitialOptions = (
  options: ClientOptionsInterface
): ClientRequiredOprionsInterface => {
  const finalOptions: ClientRequiredOprionsInterface = defaultOptions
  Object.entries(finalOptions).forEach(([index, _value]) => {
    if (typeof options[index] !== 'undefined') {
      finalOptions[index] = options[index]
    }
  })
  return finalOptions
}
