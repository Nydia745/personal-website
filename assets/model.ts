export enum ModalStatus {
  SelectDict,
  NotLogInWhenUsingFlashcard,
  Common
}

export type Word = {
  index: number,
  word: string,
  meaning: string,
  isImportant: boolean
}
