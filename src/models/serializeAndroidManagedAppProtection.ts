import { type AndroidManagedAppProtection } from './androidManagedAppProtection';
import { type ManagedAppPolicyDeploymentSummary } from './managedAppPolicyDeploymentSummary';
import { type ManagedMobileApp } from './managedMobileApp';
import { serializeManagedAppPolicyDeploymentSummary } from './serializeManagedAppPolicyDeploymentSummary';
import { serializeManagedMobileApp } from './serializeManagedMobileApp';
import { serializeTargetedManagedAppProtection } from './serializeTargetedManagedAppProtection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppProtection(writer: SerializationWriter, androidManagedAppProtection: AndroidManagedAppProtection | undefined = {} as AndroidManagedAppProtection) : void {
        serializeTargetedManagedAppProtection(writer, androidManagedAppProtection)
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", androidManagedAppProtection.apps, serializeManagedMobileApp);
        writer.writeStringValue("customBrowserDisplayName", androidManagedAppProtection.customBrowserDisplayName);
        writer.writeStringValue("customBrowserPackageId", androidManagedAppProtection.customBrowserPackageId);
        writer.writeNumberValue("deployedAppCount", androidManagedAppProtection.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", androidManagedAppProtection.deploymentSummary, serializeManagedAppPolicyDeploymentSummary);
        writer.writeBooleanValue("disableAppEncryptionIfDeviceEncryptionIsEnabled", androidManagedAppProtection.disableAppEncryptionIfDeviceEncryptionIsEnabled);
        writer.writeBooleanValue("encryptAppData", androidManagedAppProtection.encryptAppData);
        writer.writeStringValue("minimumRequiredPatchVersion", androidManagedAppProtection.minimumRequiredPatchVersion);
        writer.writeStringValue("minimumWarningPatchVersion", androidManagedAppProtection.minimumWarningPatchVersion);
        writer.writeBooleanValue("screenCaptureBlocked", androidManagedAppProtection.screenCaptureBlocked);
}
