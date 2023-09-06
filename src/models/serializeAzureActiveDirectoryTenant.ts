import { type AzureActiveDirectoryTenant } from './azureActiveDirectoryTenant';
import { serializeIdentitySource } from './serializeIdentitySource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAzureActiveDirectoryTenant(writer: SerializationWriter, azureActiveDirectoryTenant: AzureActiveDirectoryTenant | undefined = {} as AzureActiveDirectoryTenant) : void {
        serializeIdentitySource(writer, azureActiveDirectoryTenant)
        writer.writeStringValue("displayName", azureActiveDirectoryTenant.displayName);
        writer.writeStringValue("tenantId", azureActiveDirectoryTenant.tenantId);
}
