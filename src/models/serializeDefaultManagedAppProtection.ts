import { type DefaultManagedAppProtection } from './defaultManagedAppProtection';
import { type KeyValuePair } from './keyValuePair';
import { ManagedAppDataEncryptionType } from './managedAppDataEncryptionType';
import { type ManagedAppPolicyDeploymentSummary } from './managedAppPolicyDeploymentSummary';
import { type ManagedMobileApp } from './managedMobileApp';
import { serializeKeyValuePair } from './serializeKeyValuePair';
import { serializeManagedAppPolicyDeploymentSummary } from './serializeManagedAppPolicyDeploymentSummary';
import { serializeManagedAppProtection } from './serializeManagedAppProtection';
import { serializeManagedMobileApp } from './serializeManagedMobileApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDefaultManagedAppProtection(writer: SerializationWriter, defaultManagedAppProtection: DefaultManagedAppProtection | undefined = {} as DefaultManagedAppProtection) : void {
        serializeManagedAppProtection(writer, defaultManagedAppProtection)
        writer.writeEnumValue<ManagedAppDataEncryptionType>("appDataEncryptionType", defaultManagedAppProtection.appDataEncryptionType);
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", defaultManagedAppProtection.apps, serializeManagedMobileApp);
        writer.writeCollectionOfObjectValues<KeyValuePair>("customSettings", defaultManagedAppProtection.customSettings, serializeKeyValuePair);
        writer.writeNumberValue("deployedAppCount", defaultManagedAppProtection.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", defaultManagedAppProtection.deploymentSummary, serializeManagedAppPolicyDeploymentSummary);
        writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", defaultManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled);
        writer.writeBooleanValue("encryptAppData", defaultManagedAppProtection.encryptAppData);
        writer.writeBooleanValue("faceIdBlocked", defaultManagedAppProtection.faceIdBlocked);
        writer.writeStringValue("minimumRequiredPatchVersion", defaultManagedAppProtection.minimumRequiredPatchVersion);
        writer.writeStringValue("minimumRequiredSdkVersion", defaultManagedAppProtection.minimumRequiredSdkVersion);
        writer.writeStringValue("minimumWarningPatchVersion", defaultManagedAppProtection.minimumWarningPatchVersion);
        writer.writeBooleanValue("screenCaptureBlocked", defaultManagedAppProtection.screenCaptureBlocked);
}
