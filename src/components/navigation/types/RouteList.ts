export type AuthType = 'public' | 'auth' | 'unauth'

export type RouteList = { name: string; path: string; authType: AuthType }
