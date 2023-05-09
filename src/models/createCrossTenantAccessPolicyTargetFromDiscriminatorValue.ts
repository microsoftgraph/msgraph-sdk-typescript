import {deserializeIntoCrossTenantAccessPolicyTarget} from './deserializeIntoCrossTenantAccessPolicyTarget';
import {CrossTenantAccessPolicyTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyTarget;
}
