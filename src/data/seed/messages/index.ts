import { additionalThreadMessages } from './additionalThreads'
import { adKotakbMessages } from './ad-kotakb'
import { bhAdhaarMessages } from './bh-adhaar'
import { bzCkycrMessages } from './bz-ckycr'
import { cpSnitchMessages } from './cp-snitch'
import { adWestsideMessages } from './ad-wstsid'
import { axHungerBoxMessages } from './ax-hngrbx'
import { jdKotakbMessages } from './jd-kotakb'
import { jdMySbiCMessages } from './jd-mysbic'
import { jdSlcbnkMessages } from './jd-slcbnk'
import { jgJiopayMessages } from './jg-jiopay'
import { jk620014Messages } from './jk-620014'
import { jkCibilaMessages } from './jk-cibila'
import { jkFlpkrtMessages } from './jk-flpkrt'
import { jkInpostMessages } from './jk-inpost'
import { jkSlcbnkMessages } from './jk-slcbnk'
import { jm620014Messages } from './jm-620014'
import { jmKotakdMessages } from './jm-kotakd'
import { jmBlueDartMessages } from './jm-bludrt'
import { jxSlcbnkMessages } from './jx-slcbnk'
import { txEdinerMessages } from './tx-ediner'
import { vdPvrVipMessages } from './vd-pvrvip'
import { vmSbiCgvMessages } from './vm-sbicgv'
import { vmSbiCrdMessages } from './vm-sbicrd'
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
  'jk-cibila-s': jkCibilaMessages,
  'vm-sbicrd-s': vmSbiCrdMessages,
  'vm-sbicgv-s': vmSbiCgvMessages,
  'jk-flpkrt-s': jkFlpkrtMessages,
  'jx-slcbnk-s': jxSlcbnkMessages,
  'bz-ckycr-s': bzCkycrMessages,
  'tx-ediner-p': txEdinerMessages,
  'cp-snitch-p': cpSnitchMessages,
  'jd-slcbnk-s': jdSlcbnkMessages,
  'vd-pvrvip-p': vdPvrVipMessages,
  'jd-mysbic-p': jdMySbiCMessages,
  'jm-bludrt-s': jmBlueDartMessages,
  'ad-wstsid-p': adWestsideMessages,
  'ax-hngrbx-s': axHungerBoxMessages,
  ...additionalThreadMessages,
}
