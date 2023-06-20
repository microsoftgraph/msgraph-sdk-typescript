import {MailboxEvidence} from './mailboxEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {serializeUserAccount} from './serializeUserAccount';
import {UserAccount} from './userAccount';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailboxEvidence(mailboxEvidence: MailboxEvidence | undefined = {} as MailboxEvidence, writer: SerializationWriter) : void {
        serializeAlertEvidence(writer, mailboxEvidence)
        writer.writeStringValue("displayName", mailboxEvidence.displayName);
        writer.writeStringValue("primaryAddress", mailboxEvidence.primaryAddress);
        writer.writeObjectValue<UserAccount>("userAccount", mailboxEvidence.userAccount, serializeUserAccount);
}
