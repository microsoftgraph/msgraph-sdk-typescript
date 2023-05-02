import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './managedDeviceMobileAppConfigurationDeviceSummary';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {serializeEntity} from './serializeEntity';
import {serializeManagedDeviceMobileAppConfigurationAssignment} from './serializeManagedDeviceMobileAppConfigurationAssignment';
import {serializeManagedDeviceMobileAppConfigurationDeviceStatus} from './serializeManagedDeviceMobileAppConfigurationDeviceStatus';
import {serializeManagedDeviceMobileAppConfigurationDeviceSummary} from './serializeManagedDeviceMobileAppConfigurationDeviceSummary';
import {serializeManagedDeviceMobileAppConfigurationUserStatus} from './serializeManagedDeviceMobileAppConfigurationUserStatus';
import {serializeManagedDeviceMobileAppConfigurationUserSummary} from './serializeManagedDeviceMobileAppConfigurationUserSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfiguration(writer: SerializationWriter, managedDeviceMobileAppConfiguration: ManagedDeviceMobileAppConfiguration | undefined = {} as ManagedDeviceMobileAppConfiguration) : void {
        serializeEntity(writer, managedDeviceMobileAppConfiguration)
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignment>("assignments", managedDeviceMobileAppConfiguration.assignments, serializeManagedDeviceMobileAppConfigurationAssignment);
        writer.writeDateValue("createdDateTime", managedDeviceMobileAppConfiguration.createdDateTime);
        writer.writeStringValue("description", managedDeviceMobileAppConfiguration.description);
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatus>("deviceStatuses", managedDeviceMobileAppConfiguration.deviceStatuses, serializeManagedDeviceMobileAppConfigurationDeviceStatus);
        writer.writeObjectValue<ManagedDeviceMobileAppConfigurationDeviceSummary>("deviceStatusSummary", managedDeviceMobileAppConfiguration.deviceStatusSummary, serializeManagedDeviceMobileAppConfigurationDeviceSummary);
        writer.writeStringValue("displayName", managedDeviceMobileAppConfiguration.displayName);
        writer.writeDateValue("lastModifiedDateTime", managedDeviceMobileAppConfiguration.lastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("targetedMobileApps", managedDeviceMobileAppConfiguration.targetedMobileApps);
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatus>("userStatuses", managedDeviceMobileAppConfiguration.userStatuses, serializeManagedDeviceMobileAppConfigurationUserStatus);
        writer.writeObjectValue<ManagedDeviceMobileAppConfigurationUserSummary>("userStatusSummary", managedDeviceMobileAppConfiguration.userStatusSummary, serializeManagedDeviceMobileAppConfigurationUserSummary);
        writer.writeNumberValue("version", managedDeviceMobileAppConfiguration.version);
}
