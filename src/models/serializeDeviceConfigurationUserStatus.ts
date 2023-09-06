import { ComplianceStatus } from './complianceStatus';
import { type DeviceConfigurationUserStatus } from './deviceConfigurationUserStatus';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationUserStatus(writer: SerializationWriter, deviceConfigurationUserStatus: DeviceConfigurationUserStatus | undefined = {} as DeviceConfigurationUserStatus) : void {
        serializeEntity(writer, deviceConfigurationUserStatus)
        writer.writeNumberValue("devicesCount", deviceConfigurationUserStatus.devicesCount);
        writer.writeDateValue("lastReportedDateTime", deviceConfigurationUserStatus.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", deviceConfigurationUserStatus.status);
        writer.writeStringValue("userDisplayName", deviceConfigurationUserStatus.userDisplayName);
        writer.writeStringValue("userPrincipalName", deviceConfigurationUserStatus.userPrincipalName);
}
