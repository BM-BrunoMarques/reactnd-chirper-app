export const RECEIVE_USERS = 'RECEIVE_USERS'

export fucntion receiveUsers (users) {
  return{
    type: RECEIVE_USERS,
    users,
  }
}
