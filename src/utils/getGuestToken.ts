import axios from 'axios'

export const getGuestToken = async (): Promise<string | null> => {
  const response = await axios.get<string>('https://mobile.twitter.com/', {
    withCredentials: true,
    headers: {
      'User-agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:56.0) Gecko/20100101 Firefox/56.0',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      Host: 'mobile.twitter.com',
      'Accept-Encoding': 'gzip, deflate',
      DNT: '1',
      Connection: 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      origin: 'https://mobile.twitter.com',
      referer: 'https://mobile.twitter.com'
    }
  })
  const tokenMatch = response.data.match(/decodeURIComponent\("gt=([^;]+);/)
  const token = tokenMatch ? tokenMatch[1] : null
  return token
}
