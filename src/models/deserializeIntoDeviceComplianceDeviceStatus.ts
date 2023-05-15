import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceDeviceStatus(deviceComplianceDeviceStatus: DeviceComplianceDeviceStatus | undefined = {} as DeviceComplianceDeviceStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { deviceComplianceDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
        "deviceDisplayName": n => { deviceComplianceDeviceStatus.deviceDisplayName = n.getStringValue(); },
        "deviceModel": n => { deviceComplianceDeviceStatus.deviceModel = n.getStringValue(); },
        "lastReportedDateTime": n => { deviceComplianceDeviceStatus.lastReportedDateTime = n.getDateValue(); },
        "status": n => { deviceComplianceDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userName": n => { deviceComplianceDeviceStatus.userName = n.getStringValue(); },
        "userPrincipalName": n => { deviceComplianceDeviceStatus.userPrincipalName = n.getStringValue(); },
    }
}
