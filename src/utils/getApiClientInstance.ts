import axios, { AxiosInstance } from 'axios'

export const getApiClientInstance = (): AxiosInstance =>
  axios.create({
    headers: {
      Host: 'twitter.com',
      origin: 'https://twitter.com',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
      Accept: '*/*',
      'Accept-Language': 'es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3',
      'Accept-Encoding': 'gzip, deflate',
      'x-twitter-active-user': 'yes',
      DNT: '1',
      Connection: 'keep-alive',
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
      TE: 'Trailers',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site'
    }
  })
