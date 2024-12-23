import request from './request'

export const codeCompletions = (data) => {
  return request.post('/api/paas/v4/chat/completions', {
    model:"codegeex-4",
    ...data
  })
} 