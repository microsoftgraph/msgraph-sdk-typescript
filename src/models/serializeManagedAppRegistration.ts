import { ManagedAppFlaggedReason } from './managedAppFlaggedReason';
import { type ManagedAppOperation } from './managedAppOperation';
import { type ManagedAppPolicy } from './managedAppPolicy';
import { type ManagedAppRegistration } from './managedAppRegistration';
import { type MobileAppIdentifier } from './mobileAppIdentifier';
import { serializeEntity } from './serializeEntity';
import { serializeManagedAppOperation } from './serializeManagedAppOperation';
import { serializeManagedAppPolicy } from './serializeManagedAppPolicy';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppRegistration(writer: SerializationWriter, managedAppRegistration: ManagedAppRegistration | undefined = {} as ManagedAppRegistration) : void {
        serializeEntity(writer, managedAppRegistration)
        writer.writeObjectValue<MobileAppIdentifier>("appIdentifier", managedAppRegistration.appIdentifier, serializeMobileAppIdentifier);
        writer.writeStringValue("applicationVersion", managedAppRegistration.applicationVersion);
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("appliedPolicies", managedAppRegistration.appliedPolicies, serializeManagedAppPolicy);
        writer.writeDateValue("createdDateTime", managedAppRegistration.createdDateTime);
        writer.writeStringValue("deviceName", managedAppRegistration.deviceName);
        writer.writeStringValue("deviceTag", managedAppRegistration.deviceTag);
        writer.writeStringValue("deviceType", managedAppRegistration.deviceType);
        writer.writeCollectionOfObjectValues<ManagedAppFlaggedReason>("flaggedReasons", managedAppRegistration.flaggedReasons, object);
        writer.writeCollectionOfObjectValues<ManagedAppPolicy>("intendedPolicies", managedAppRegistration.intendedPolicies, serializeManagedAppPolicy);
        writer.writeDateValue("lastSyncDateTime", managedAppRegistration.lastSyncDateTime);
        writer.writeStringValue("managementSdkVersion", managedAppRegistration.managementSdkVersion);
        writer.writeCollectionOfObjectValues<ManagedAppOperation>("operations", managedAppRegistration.operations, serializeManagedAppOperation);
        writer.writeStringValue("platformVersion", managedAppRegistration.platformVersion);
        writer.writeStringValue("userId", managedAppRegistration.userId);
        writer.writeStringValue("version", managedAppRegistration.version);
}
