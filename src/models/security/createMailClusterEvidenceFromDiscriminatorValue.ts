import {deserializeIntoMailClusterEvidence} from './deserializeIntoMailClusterEvidence';
import {MailClusterEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailClusterEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailClusterEvidence;
}
