import { deserializeIntoIpEvidence } from './deserializeIntoIpEvidence';
import { type IpEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIpEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIpEvidence;
}
