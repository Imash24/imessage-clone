export const appRoutes = {
  conversation: (conversationId: string) => `/conversations/${conversationId}`,
  home: '/',
} as const
