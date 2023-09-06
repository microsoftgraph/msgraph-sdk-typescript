import { deserializeIntoSecurityGroupEvidence } from './deserializeIntoSecurityGroupEvidence';
import { type SecurityGroupEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecurityGroupEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecurityGroupEvidence;
}
