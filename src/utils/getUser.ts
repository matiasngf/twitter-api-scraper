import { AxiosInstance } from 'axios'
import { UserFromId } from '../types/userFromIdInterface'
import { UserInterface } from '../types/userInterface'

export const testUsername = (username: string) => {
  if (typeof username !== 'string') {
    return false
  }
  return /^([A-Za-z]+[A-Za-z0-9-_]+)$/.test(username)
}

export const getUser = async (instance: AxiosInstance, username: string) => {
  if (!testUsername(username)) {
    throw new Error('Invalid username')
  }
  const { data } = await instance.get<UserInterface>(
    `https://twitter.com/i/api/graphql/B-dCk4ph5BZ0UReWK590tw/UserByScreenName?variables={"screen_name":"${username}","withSafetyModeUserFields":true,"withSuperFollowsUserFields":false}`
  )
  return data
}

export const getUserById = async (
  instance: AxiosInstance,
  userId: number | string
) => {
  const { data } = await instance.get<UserFromId>(
    `https://twitter.com/i/api/graphql/WN6Hck-Pwm-YP0uxVj1oMQ/UserByRestIdWithoutResults?variables={"userId":"${userId}","withHighlightedLabel":true}`
  )
  return data
}
