import {IosManagedAppProtection} from './iosManagedAppProtection';
import {ManagedAppDataEncryptionType} from './managedAppDataEncryptionType';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {serializeManagedAppPolicyDeploymentSummary} from './serializeManagedAppPolicyDeploymentSummary';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {serializeTargetedManagedAppProtection} from './serializeTargetedManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosManagedAppProtection(writer: SerializationWriter, iosManagedAppProtection: IosManagedAppProtection | undefined = {} as IosManagedAppProtection) : void {
        serializeTargetedManagedAppProtection(writer, iosManagedAppProtection)
        writer.writeEnumValue<ManagedAppDataEncryptionType>("appDataEncryptionType", iosManagedAppProtection.appDataEncryptionType);
        writer.writeCollectionOfObjectValues<ManagedMobileApp>("apps", iosManagedAppProtection.apps, serializeManagedMobileApp);
        writer.writeStringValue("customBrowserProtocol", iosManagedAppProtection.customBrowserProtocol);
        writer.writeNumberValue("deployedAppCount", iosManagedAppProtection.deployedAppCount);
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummary>("deploymentSummary", iosManagedAppProtection.deploymentSummary, serializeManagedAppPolicyDeploymentSummary);
        writer.writeBooleanValue("faceIdBlocked", iosManagedAppProtection.faceIdBlocked);
        writer.writeStringValue("minimumRequiredSdkVersion", iosManagedAppProtection.minimumRequiredSdkVersion);
}
