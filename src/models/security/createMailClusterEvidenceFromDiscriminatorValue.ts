import { deserializeIntoMailClusterEvidence } from './deserializeIntoMailClusterEvidence';
import { type MailClusterEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailClusterEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailClusterEvidence;
}
