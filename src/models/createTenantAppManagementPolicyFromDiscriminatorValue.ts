import {TenantAppManagementPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTenantAppManagementPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : TenantAppManagementPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TenantAppManagementPolicy();
}
