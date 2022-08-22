export interface Error {
  error: boolean,
  text: string,
}

export interface LoginError {
  email: string,
  password: string,
  message?: Error
}

export interface AuthResponse {
  ok: boolean,
  uid?: string,
  email?: string;
  token?: string,
  error?: Error
}
