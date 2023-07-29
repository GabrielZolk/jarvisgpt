import { contacts } from './data/contacts'
import { today } from './date/today'
import { send } from './email/send'
import { issues } from './github/issues'
import { pullRequests } from './github/pullRequests'
import { repositories } from './github/repositories'
import { daily } from './sprint/daily'
import { stories } from './sprint/stories'

export const functionDeclarations = [
    today,
    daily,
    stories,
    contacts,
    send,
    pullRequests,
    issues,
    repositories,
]