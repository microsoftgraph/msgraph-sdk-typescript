import { type ServicePrincipalLockConfiguration } from './servicePrincipalLockConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalLockConfiguration(writer: SerializationWriter, servicePrincipalLockConfiguration: ServicePrincipalLockConfiguration | undefined = {} as ServicePrincipalLockConfiguration) : void {
        writer.writeBooleanValue("allProperties", servicePrincipalLockConfiguration.allProperties);
        writer.writeBooleanValue("credentialsWithUsageSign", servicePrincipalLockConfiguration.credentialsWithUsageSign);
        writer.writeBooleanValue("credentialsWithUsageVerify", servicePrincipalLockConfiguration.credentialsWithUsageVerify);
        writer.writeBooleanValue("isEnabled", servicePrincipalLockConfiguration.isEnabled);
        writer.writeStringValue("@odata.type", servicePrincipalLockConfiguration.odataType);
        writer.writeBooleanValue("tokenEncryptionKeyId", servicePrincipalLockConfiguration.tokenEncryptionKeyId);
        writer.writeAdditionalData(servicePrincipalLockConfiguration.additionalData);
}
