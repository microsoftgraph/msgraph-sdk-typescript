import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationDeviceStatus(deviceConfigurationDeviceStatus: DeviceConfigurationDeviceStatus | undefined = {} as DeviceConfigurationDeviceStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { deviceConfigurationDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
        "deviceDisplayName": n => { deviceConfigurationDeviceStatus.deviceDisplayName = n.getStringValue(); },
        "deviceModel": n => { deviceConfigurationDeviceStatus.deviceModel = n.getStringValue(); },
        "lastReportedDateTime": n => { deviceConfigurationDeviceStatus.lastReportedDateTime = n.getDateValue(); },
        "status": n => { deviceConfigurationDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userName": n => { deviceConfigurationDeviceStatus.userName = n.getStringValue(); },
        "userPrincipalName": n => { deviceConfigurationDeviceStatus.userPrincipalName = n.getStringValue(); },
    }
}
