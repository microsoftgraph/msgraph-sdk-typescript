import {deserializeIntoCrossTenantAccessPolicy} from './deserializeIntoCrossTenantAccessPolicy';
import {CrossTenantAccessPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossTenantAccessPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossTenantAccessPolicy;
}
