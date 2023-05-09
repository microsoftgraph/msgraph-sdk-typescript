import {deserializeIntoIpEvidence} from './deserializeIntoIpEvidence';
import {IpEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIpEvidence;
}
