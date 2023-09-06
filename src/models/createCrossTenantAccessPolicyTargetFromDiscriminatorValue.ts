import { deserializeIntoCrossTenantAccessPolicyTarget } from './deserializeIntoCrossTenantAccessPolicyTarget';
import { type CrossTenantAccessPolicyTarget } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicyTarget;
}
