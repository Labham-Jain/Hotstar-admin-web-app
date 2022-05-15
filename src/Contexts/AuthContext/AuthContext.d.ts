export type AuthStates = 'loading' | 'authenticated' | 'unauthenticated'
export type AuthCtxType = {
  state: AuthStates,
  details?: {
    name: string;
    email: string;
    phone?: number;
    token: string;
  }
}