import {CrossCloudAzureActiveDirectoryTenant} from './crossCloudAzureActiveDirectoryTenant';
import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCrossCloudAzureActiveDirectoryTenant(crossCloudAzureActiveDirectoryTenant: CrossCloudAzureActiveDirectoryTenant | undefined = {} as CrossCloudAzureActiveDirectoryTenant) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(crossCloudAzureActiveDirectoryTenant),
        "cloudInstance": n => { crossCloudAzureActiveDirectoryTenant.cloudInstance = n.getStringValue(); },
        "displayName": n => { crossCloudAzureActiveDirectoryTenant.displayName = n.getStringValue(); },
        "tenantId": n => { crossCloudAzureActiveDirectoryTenant.tenantId = n.getStringValue(); },
    }
}
