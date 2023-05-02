import {ComplianceStatus} from './complianceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceMobileAppConfigurationDeviceStatus(writer: SerializationWriter, managedDeviceMobileAppConfigurationDeviceStatus: ManagedDeviceMobileAppConfigurationDeviceStatus | undefined = {} as ManagedDeviceMobileAppConfigurationDeviceStatus) : void {
        serializeEntity(writer, managedDeviceMobileAppConfigurationDeviceStatus)
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", managedDeviceMobileAppConfigurationDeviceStatus.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceDisplayName", managedDeviceMobileAppConfigurationDeviceStatus.deviceDisplayName);
        writer.writeStringValue("deviceModel", managedDeviceMobileAppConfigurationDeviceStatus.deviceModel);
        writer.writeDateValue("lastReportedDateTime", managedDeviceMobileAppConfigurationDeviceStatus.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", managedDeviceMobileAppConfigurationDeviceStatus.status);
        writer.writeStringValue("userName", managedDeviceMobileAppConfigurationDeviceStatus.userName);
        writer.writeStringValue("userPrincipalName", managedDeviceMobileAppConfigurationDeviceStatus.userPrincipalName);
}
