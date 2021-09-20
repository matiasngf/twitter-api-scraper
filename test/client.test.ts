import TwitterClient from '../src'

jest.setTimeout(20000)

describe('Test Main client', (): void => {
  test('connect', async (): Promise<void> => {
    const client = new TwitterClient()
    await client.connect()
    await client.search(
      {
        terms: 'hello world!'
      },
      5
    )
  })
})
