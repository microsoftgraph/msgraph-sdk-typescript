import {MailboxEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailboxEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailboxEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailboxEvidence();
}
