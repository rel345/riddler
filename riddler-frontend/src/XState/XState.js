import { createMachine, assign } from "xstate"

const promiseMachine = createMachine({
    id: 'puzzle',
    initial: 'idle',
    states: {
        idle: {},
        selected: {}
    }
});
