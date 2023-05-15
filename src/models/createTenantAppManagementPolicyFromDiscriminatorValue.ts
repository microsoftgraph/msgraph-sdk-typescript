import {deserializeIntoTenantAppManagementPolicy} from './deserializeIntoTenantAppManagementPolicy';
import {TenantAppManagementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTenantAppManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTenantAppManagementPolicy;
}
