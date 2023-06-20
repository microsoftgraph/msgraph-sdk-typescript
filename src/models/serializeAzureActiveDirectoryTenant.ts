import {AzureActiveDirectoryTenant} from './azureActiveDirectoryTenant';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAzureActiveDirectoryTenant(azureActiveDirectoryTenant: AzureActiveDirectoryTenant | undefined = {} as AzureActiveDirectoryTenant, writer: SerializationWriter) : void {
        serializeIdentitySource(writer, azureActiveDirectoryTenant)
        writer.writeStringValue("displayName", azureActiveDirectoryTenant.displayName);
        writer.writeStringValue("tenantId", azureActiveDirectoryTenant.tenantId);
}
