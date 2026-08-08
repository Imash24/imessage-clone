import { additionalThreadMessages } from './additionalThreads'
import { adKotakbMessages } from './ad-kotakb'
import { bhAdhaarMessages } from './bh-adhaar'
import { jdKotakbMessages } from './jd-kotakb'
import { jgJiopayMessages } from './jg-jiopay'
import { jk620014Messages } from './jk-620014'
import { jkInpostMessages } from './jk-inpost'
import { jkSlcbnkMessages } from './jk-slcbnk'
import { jm620014Messages } from './jm-620014'
import { jmKotakdMessages } from './jm-kotakd'
import type { Message } from '@/features/messages/types'

export const seedMessagesByConversationId: Record<string, Message[]> = {
  'ad-kotakb-s': adKotakbMessages,
  'jm-kotakd-s': jmKotakdMessages,
  'jd-kotakb-s': jdKotakbMessages,
  'jk-slcbnk-s': jkSlcbnkMessages,
  'jk-inpost-s': jkInpostMessages,
  'bh-adhaar-g': bhAdhaarMessages,
  'jk-620014-p': jk620014Messages,
  'jm-620014-p': jm620014Messages,
  'jg-jiopay-s': jgJiopayMessages,
  ...additionalThreadMessages,
}
