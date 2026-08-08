import { seedInbox } from '../inbox'
import { createPlaceholderHistory } from './createPlaceholderHistory'
import type { Message } from '@/features/messages/types'

const namedThreadIds = new Set([
  'ad-kotakb-s', 'jm-kotakd-s', 'jd-kotakb-s', 'jk-slcbnk-s', 'jk-inpost-s',
  'bh-adhaar-g', 'jk-620014-p', 'jm-620014-p', 'jg-jiopay-s', 'jx-slcbnk-s',
  'jk-cibila-s', 'vm-sbicrd-s', 'vm-sbicgv-s', 'jk-flpkrt-s', 'bz-ckycr-s', 'tx-ediner-p',
])

export const additionalThreadMessages: Record<string, Message[]> = Object.fromEntries(
  seedInbox
    .filter((item) => !namedThreadIds.has(item.id))
    .map((item) => [item.id, createPlaceholderHistory(item.id, item.preview, item.updatedAt)]),
)
