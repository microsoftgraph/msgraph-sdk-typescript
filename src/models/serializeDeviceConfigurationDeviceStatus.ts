import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationDeviceStatus(writer: SerializationWriter, deviceConfigurationDeviceStatus: DeviceConfigurationDeviceStatus | undefined = {} as DeviceConfigurationDeviceStatus) : void {
        serializeEntity(writer, deviceConfigurationDeviceStatus)
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", deviceConfigurationDeviceStatus.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceDisplayName", deviceConfigurationDeviceStatus.deviceDisplayName);
        writer.writeStringValue("deviceModel", deviceConfigurationDeviceStatus.deviceModel);
        writer.writeDateValue("lastReportedDateTime", deviceConfigurationDeviceStatus.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", deviceConfigurationDeviceStatus.status);
        writer.writeStringValue("userName", deviceConfigurationDeviceStatus.userName);
        writer.writeStringValue("userPrincipalName", deviceConfigurationDeviceStatus.userPrincipalName);
}
