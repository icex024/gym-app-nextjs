export interface SessionStateInterface {
  sessionStatus: SessionStatusEnum;
}

export enum SessionStatusEnum {
  NeedToRetryLogin = "NeedToRetryLogin",
  NotStarted = "NotStarted",
  Checking = "Checking",
  NotLoggedIn = "NotLoggedIn",
  Ready = "Ready",
  WrongCredentials = "WrongCredentials",
}
