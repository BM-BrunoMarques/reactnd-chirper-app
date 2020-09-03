export const RECEIVE_TWEETS  = 'RECEIVE_TWEETS'

Export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}
