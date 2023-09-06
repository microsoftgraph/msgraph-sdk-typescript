import { deserializeIntoMailboxEvidence } from './deserializeIntoMailboxEvidence';
import { type MailboxEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailboxEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailboxEvidence;
}
