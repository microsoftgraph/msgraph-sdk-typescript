import type {CrossCloudAzureActiveDirectoryTenant} from './crossCloudAzureActiveDirectoryTenant';
import {serializeIdentitySource} from './serializeIdentitySource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossCloudAzureActiveDirectoryTenant(writer: SerializationWriter, crossCloudAzureActiveDirectoryTenant: CrossCloudAzureActiveDirectoryTenant | undefined = {} as CrossCloudAzureActiveDirectoryTenant) : void {
        serializeIdentitySource(writer, crossCloudAzureActiveDirectoryTenant)
        writer.writeStringValue("cloudInstance", crossCloudAzureActiveDirectoryTenant.cloudInstance);
        writer.writeStringValue("displayName", crossCloudAzureActiveDirectoryTenant.displayName);
        writer.writeStringValue("tenantId", crossCloudAzureActiveDirectoryTenant.tenantId);
}
