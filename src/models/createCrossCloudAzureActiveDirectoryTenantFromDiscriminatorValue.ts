import {CrossCloudAzureActiveDirectoryTenant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCrossCloudAzureActiveDirectoryTenantFromDiscriminatorValue(parseNode: ParseNode | undefined) : CrossCloudAzureActiveDirectoryTenant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CrossCloudAzureActiveDirectoryTenant();
}
