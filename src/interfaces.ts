export type ITodo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export enum Filters {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}