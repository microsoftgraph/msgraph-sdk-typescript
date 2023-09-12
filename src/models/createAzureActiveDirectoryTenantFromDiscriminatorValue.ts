import { deserializeIntoAzureActiveDirectoryTenant } from './deserializeIntoAzureActiveDirectoryTenant';
import { type AzureActiveDirectoryTenant } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAzureActiveDirectoryTenantFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAzureActiveDirectoryTenant;
}
