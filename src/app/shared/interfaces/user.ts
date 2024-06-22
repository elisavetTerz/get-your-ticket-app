export interface User {
  email: string;
  password: string;
  username: string;
}

export interface Credentials {
  //email: string;
  username: string;
  password: string;
}

export interface LoggedInUser {
  username: string;
  //email: string;
}