export type AuthType = 'public' | 'auth' | 'unauth'

export type RouteList = { name: string; href: string; authType: AuthType }
