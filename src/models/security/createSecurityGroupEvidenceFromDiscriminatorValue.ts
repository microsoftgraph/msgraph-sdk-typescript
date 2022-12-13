import {SecurityGroupEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityGroupEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityGroupEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityGroupEvidence();
}
