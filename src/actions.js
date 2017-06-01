export const PING = 'PING';
export const PONG = 'PONG';
export const START_ClOCK = 'START_CLOCK';
export const INCREMENT_CLOCK = 'INCREMENT_CLOCK';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_RESPONSE = 'GET_USERS_RESPONSE';

const action = type => () => ({ type });

export const ping = action(PING)

export const startClock = action(START_ClOCK)

export const getUsers = action(GET_USERS);
