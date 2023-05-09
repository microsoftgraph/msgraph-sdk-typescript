import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationUserStatus(deviceConfigurationUserStatus: DeviceConfigurationUserStatus | undefined = {} as DeviceConfigurationUserStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationUserStatus),
        "devicesCount": n => { deviceConfigurationUserStatus.devicesCount = n.getNumberValue(); },
        "lastReportedDateTime": n => { deviceConfigurationUserStatus.lastReportedDateTime = n.getDateValue(); },
        "status": n => { deviceConfigurationUserStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userDisplayName": n => { deviceConfigurationUserStatus.userDisplayName = n.getStringValue(); },
        "userPrincipalName": n => { deviceConfigurationUserStatus.userPrincipalName = n.getStringValue(); },
    }
}
