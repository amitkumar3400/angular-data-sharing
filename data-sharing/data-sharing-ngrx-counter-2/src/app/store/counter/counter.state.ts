export interface ICounter {
  counter: number;
  loading: boolean;
}

export const initialStateCounter: ICounter = {
  counter: 0,
  loading: false,
};
