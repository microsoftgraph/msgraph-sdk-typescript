import {CrossTenantAccessPolicyTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossTenantAccessPolicyTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossTenantAccessPolicyTarget();
}
