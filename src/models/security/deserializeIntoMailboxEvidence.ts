import { createUserAccountFromDiscriminatorValue } from './createUserAccountFromDiscriminatorValue';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type MailboxEvidence } from './mailboxEvidence';
import { serializeUserAccount } from './serializeUserAccount';
import { type UserAccount } from './userAccount';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMailboxEvidence(mailboxEvidence: MailboxEvidence | undefined = {} as MailboxEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(mailboxEvidence),
        "displayName": n => { mailboxEvidence.displayName = n.getStringValue(); },
        "primaryAddress": n => { mailboxEvidence.primaryAddress = n.getStringValue(); },
        "userAccount": n => { mailboxEvidence.userAccount = n.getObjectValue<UserAccount>(createUserAccountFromDiscriminatorValue); },
    }
}
