import { ComplianceStatus } from './complianceStatus';
import { type DeviceComplianceUserStatus } from './deviceComplianceUserStatus';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceUserStatus(writer: SerializationWriter, deviceComplianceUserStatus: DeviceComplianceUserStatus | undefined = {} as DeviceComplianceUserStatus) : void {
        serializeEntity(writer, deviceComplianceUserStatus)
        writer.writeNumberValue("devicesCount", deviceComplianceUserStatus.devicesCount);
        writer.writeDateValue("lastReportedDateTime", deviceComplianceUserStatus.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", deviceComplianceUserStatus.status);
        writer.writeStringValue("userDisplayName", deviceComplianceUserStatus.userDisplayName);
        writer.writeStringValue("userPrincipalName", deviceComplianceUserStatus.userPrincipalName);
}
