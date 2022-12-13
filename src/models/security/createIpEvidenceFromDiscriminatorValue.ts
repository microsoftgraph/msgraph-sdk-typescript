import {IpEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IpEvidence();
}
