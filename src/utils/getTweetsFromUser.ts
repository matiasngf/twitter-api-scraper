export const getTweetsFromUsername = async (username: string) => {
  return username
}

export const getTweetsFromUserId = async (
  userId: number,
  count: number = 300
) => {
  const url = `https://mobile.twitter.com/i/api/graphql/Lya9A5YxHQxhCQJ5IPtm7A/UserTweets?variables={"userId":"${userId}","count":${count},"withTweetQuoteCount":true,"includePromotedContent":true,"withSuperFollowsUserFields":false,"withUserResults":true,"withBirdwatchPivots":false,"withReactionsMetadata":false,"withReactionsPerspective":false,"withSuperFollowsTweetFields":false,"withVoice":true}`
  return url
}
