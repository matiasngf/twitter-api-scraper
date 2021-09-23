# twitter-api-scraper

> Get typed data from the public twitter api. No keys required.

[![NPM](https://img.shields.io/npm/v/twitter-api-scraper.svg)](https://www.npmjs.com/package/twitter-api-scraper) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![License](https://img.shields.io/github/license/matiasngf/twitter-api-scraper?style=flat-square)](https://github.com/matiasngf/twitter-api-scraper/blob/main/LICENSE) 
[![Issues](https://img.shields.io/github/issues/matiasngf/twitter-api-scraper)](https://github.com/matiasngf/twitter-api-scraper/issues)

- [x] Search tweets
- [x] Get users by username
- [x] Get users by id
- [x] Get hashflags
- [ ] Get tweets from user
- [ ] Get replies from tweet
- [ ] Get trending topics

## Install

```bash
npm install --save twitter-api-scraper
```

## Usage

### Start client

First, connect() the client.

```ts
import TwitterClient from 'twitter-api-scraper'
const client = new TwitterClient()
await client.connect()
```

### Search

```ts
const maxTweets = 3000
const result = await client.search(
  {
    terms: 'hello world!'
  },
  maxTweets
)

const { tweets, users, nextToken } = result

```

### Typescript

```ts
import { SearchQuery, ParsedSearchResult } from 'twitter-api-scraper'

const query: SearchQuery = {
  terms: '#typescript',
  dateFrom: '2021-02-15',
  dateTo: '2021-02-15'
}

const result: ParsedSearchResult = await client.search(query)
```

### Search parameters

```ts
const query: SearchQuery = {
  terms: '#typescript',
  dateFrom: '2021-02-15',
  dateTo: '2021-02-17',
  minReplies: 10,
  minRetweets: 10,
  minFaves: 10,
  lang: 'es'
}
client.search(query)
```

### Search multiple pages

```ts
const result = await client.search(query, 100)
const { nextToken } = result

const secondPageResult = await client.search(query, 100, nextToken)
```

### Original api response

```ts
const originalApiResult = await client.searchRaw(
  {
    terms: 'hello world!'
  }
)
```

## Users

### Get user

```ts
const user: UserInterface = await client.getUser('jack')
```

### Get user by id

```ts
const user: UserFromId = await client.getUserById('12')
```

## Hashflags

```ts
const hashflags: Hashflag[] = await client.getHashflags('2021-09-23')
```


## License

MIT © [matiasngf](https://github.com/matiasngf)
