import {TenantAppManagementPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTenantAppManagementPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TenantAppManagementPolicyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TenantAppManagementPolicyCollectionResponse();
}
