import type {ServicePrincipalLockConfiguration} from './servicePrincipalLockConfiguration';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalLockConfiguration(servicePrincipalLockConfiguration: ServicePrincipalLockConfiguration | undefined = {} as ServicePrincipalLockConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "allProperties": n => { servicePrincipalLockConfiguration.allProperties = n.getBooleanValue(); },
        "credentialsWithUsageSign": n => { servicePrincipalLockConfiguration.credentialsWithUsageSign = n.getBooleanValue(); },
        "credentialsWithUsageVerify": n => { servicePrincipalLockConfiguration.credentialsWithUsageVerify = n.getBooleanValue(); },
        "isEnabled": n => { servicePrincipalLockConfiguration.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { servicePrincipalLockConfiguration.odataType = n.getStringValue(); },
        "tokenEncryptionKeyId": n => { servicePrincipalLockConfiguration.tokenEncryptionKeyId = n.getBooleanValue(); },
    }
}
