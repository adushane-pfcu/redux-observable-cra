export const PING = 'PING';
export const PONG = 'PONG';
export const START_ClOCK = 'START_CLOCK';
export const INCREMENT_CLOCK = 'INCREMENT_CLOCK';

export const ping = () => ({ type: PING });

export const startClock = () => ({ type: START_ClOCK });
