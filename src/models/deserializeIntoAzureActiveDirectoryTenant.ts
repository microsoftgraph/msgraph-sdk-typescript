import {AzureActiveDirectoryTenant} from './azureActiveDirectoryTenant';
import {deserializeIntoIdentitySource} from './deserializeIntoIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAzureActiveDirectoryTenant(azureActiveDirectoryTenant: AzureActiveDirectoryTenant | undefined = {} as AzureActiveDirectoryTenant) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentitySource(azureActiveDirectoryTenant),
        "displayName": n => { azureActiveDirectoryTenant.displayName = n.getStringValue(); },
        "tenantId": n => { azureActiveDirectoryTenant.tenantId = n.getStringValue(); },
    }
}
