import {AzureActiveDirectoryTenant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAzureActiveDirectoryTenantFromDiscriminatorValue(parseNode: ParseNode | undefined) : AzureActiveDirectoryTenant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AzureActiveDirectoryTenant();
}
