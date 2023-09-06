import { deserializeIntoCrossTenantAccessPolicy } from './deserializeIntoCrossTenantAccessPolicy';
import { type CrossTenantAccessPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicy;
}
