import { createMachine, assign } from 'xstate';

const promiseMachine = createMachine({
    id: "Machine Name",
    initial: "upload_puzzle",
    states: {
      upload_puzzle: {
        on: {
          picture_is_loaded: {
            target: "upload_puzzle_piece",
          },
        },
      },
      upload_puzzle_piece: {
        on: {
          piece_is_loaded: {
            target: "upload_to_backend",
          },
        },
      },
      upload_to_backend: {
        on: {
          waiting_for_response: [
            {
              target: "display_solution",
              cond: "success",
            },
            {
              target: "error",
              cond: "failure",
            },
          ],
        },
      },
      display_solution: {
        on: {
          new_puzzle: {
            target: "upload_puzzle",
          },
        },
      },
      error: {
        on: {
          new_puzzle: {
            target: "upload_puzzle",
          },
        },
      },
    },
    context: {},
    predictableActionArguments: true,
    preserveActionOrder: true,
  });

export default promiseMachine;
