import { deserializeIntoCrossCloudAzureActiveDirectoryTenant } from './deserializeIntoCrossCloudAzureActiveDirectoryTenant';
import { type CrossCloudAzureActiveDirectoryTenant } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCrossCloudAzureActiveDirectoryTenantFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossCloudAzureActiveDirectoryTenant;
}
