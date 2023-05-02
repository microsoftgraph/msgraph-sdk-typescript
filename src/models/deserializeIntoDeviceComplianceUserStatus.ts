import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceUserStatus(deviceComplianceUserStatus: DeviceComplianceUserStatus | undefined = {} as DeviceComplianceUserStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceUserStatus),
        "devicesCount": n => { deviceComplianceUserStatus.devicesCount = n.getNumberValue(); },
        "lastReportedDateTime": n => { deviceComplianceUserStatus.lastReportedDateTime = n.getDateValue(); },
        "status": n => { deviceComplianceUserStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userDisplayName": n => { deviceComplianceUserStatus.userDisplayName = n.getStringValue(); },
        "userPrincipalName": n => { deviceComplianceUserStatus.userPrincipalName = n.getStringValue(); },
    }
}
