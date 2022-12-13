import {MailClusterEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMailClusterEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : MailClusterEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MailClusterEvidence();
}
