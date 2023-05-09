import {deserializeIntoCrossCloudAzureActiveDirectoryTenant} from './deserializeIntoCrossCloudAzureActiveDirectoryTenant';
import {CrossCloudAzureActiveDirectoryTenant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossCloudAzureActiveDirectoryTenantFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCrossCloudAzureActiveDirectoryTenant;
}
