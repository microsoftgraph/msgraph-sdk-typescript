import {ComplianceStatus} from './complianceStatus';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceUserStatus(writer: SerializationWriter, deviceComplianceUserStatus: DeviceComplianceUserStatus | undefined = {} as DeviceComplianceUserStatus) : void {
        serializeEntity(writer, deviceComplianceUserStatus)
        writer.writeNumberValue("devicesCount", deviceComplianceUserStatus.devicesCount);
        writer.writeDateValue("lastReportedDateTime", deviceComplianceUserStatus.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", deviceComplianceUserStatus.status);
        writer.writeStringValue("userDisplayName", deviceComplianceUserStatus.userDisplayName);
        writer.writeStringValue("userPrincipalName", deviceComplianceUserStatus.userPrincipalName);
}
