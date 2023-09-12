import { deserializeIntoTenantAppManagementPolicy } from './deserializeIntoTenantAppManagementPolicy';
import { type TenantAppManagementPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTenantAppManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTenantAppManagementPolicy;
}
