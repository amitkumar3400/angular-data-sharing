export interface ICounter {
  counter: number;
  loading: boolean;
  customCounter: number;
}

export const initialStateCounter: ICounter = {
  counter: 0,
  loading: false,
  customCounter: 1,
};
