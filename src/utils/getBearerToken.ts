import axios from 'axios'

export const getBearerToken = async (
  userAgent: string
): Promise<string | null> => {
  const response = await axios.get<string>(
    'https://abs.twimg.com/responsive-web/web/main.92eeeb04.js',
    {
      headers: {
        'User-agent': userAgent
      }
    }
  )
  const tokenMatch = response.data.match(/s="(AAAAAA[^"]+)"/)
  const token = tokenMatch ? tokenMatch[1] : null
  return token
}
