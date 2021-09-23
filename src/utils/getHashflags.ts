import axios from 'axios'

export interface Hashflag {
  campaignName: string
  hashtag: string
  assetUrl: string
  startingTimestampMs: string
  endingTimestampMs: string
}

export const hashflagHeaders = {
  Host: 'pbs.twimg.com',
  Accept: '*/*',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0',
  'Accept-Language': 'en-US,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  Origin: 'https://mobile.twitter.com',
  DNT: '1',
  Connection: 'keep-alive',
  Referer: 'https://mobile.twitter.com/',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site'
}

export const getHashflags = async (date: string) => {
  const { data } = await axios.get<Hashflag[]>(
    `https://pbs.twimg.com/hashflag/config-${date}-01.json`,
    { headers: hashflagHeaders }
  )
  return data
}
