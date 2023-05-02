import {ComplianceStatus} from './complianceStatus';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceDeviceStatus(writer: SerializationWriter, deviceComplianceDeviceStatus: DeviceComplianceDeviceStatus | undefined = {} as DeviceComplianceDeviceStatus) : void {
        serializeEntity(writer, deviceComplianceDeviceStatus)
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", deviceComplianceDeviceStatus.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceDisplayName", deviceComplianceDeviceStatus.deviceDisplayName);
        writer.writeStringValue("deviceModel", deviceComplianceDeviceStatus.deviceModel);
        writer.writeDateValue("lastReportedDateTime", deviceComplianceDeviceStatus.lastReportedDateTime);
        writer.writeEnumValue<ComplianceStatus>("status", deviceComplianceDeviceStatus.status);
        writer.writeStringValue("userName", deviceComplianceDeviceStatus.userName);
        writer.writeStringValue("userPrincipalName", deviceComplianceDeviceStatus.userPrincipalName);
}
