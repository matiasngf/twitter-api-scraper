import TwitterClient from '../src'

jest.setTimeout(20000)

describe('Test Search', (): void => {
  test('multiple-pages', async (): Promise<void> => {
    const client = new TwitterClient()
    await client.connect()
    const result = await client.search(
      {
        terms: 'hello world!'
      },
      5
    )
    const token = result.nextToken
    await client.search(
      {
        terms: 'hello world!'
      },
      5,
      token
    )
  })
})
