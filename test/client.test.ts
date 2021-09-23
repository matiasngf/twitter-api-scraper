import TwitterClient from '../src'

jest.setTimeout(20000)

describe('Test Main client', async (): Promise<void> => {
  const client = new TwitterClient()
  await client.connect()
  test('search', async (): Promise<void> => {
    const q = { terms: 'hello world!' }
    const result = await client.search(q, 5)
    const token = result.nextToken
    await client.search(q, 5, token)
  })
  test('getUser', async (): Promise<void> => {
    await client.getUser('jack')
  })
  test('getUserById', async (): Promise<void> => {
    await client.getUserById('12')
  })
  test('getHashflags', async (): Promise<void> => {
    await client.getHashflags('2021-09-23')
  })
})
