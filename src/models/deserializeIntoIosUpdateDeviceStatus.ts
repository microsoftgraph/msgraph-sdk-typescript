import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IosUpdateDeviceStatus} from './iosUpdateDeviceStatus';
import {IosUpdatesInstallStatus} from './iosUpdatesInstallStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateDeviceStatus(iosUpdateDeviceStatus: IosUpdateDeviceStatus | undefined = {} as IosUpdateDeviceStatus) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(iosUpdateDeviceStatus),
        "complianceGracePeriodExpirationDateTime": n => { iosUpdateDeviceStatus.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
        "deviceDisplayName": n => { iosUpdateDeviceStatus.deviceDisplayName = n.getStringValue(); },
        "deviceId": n => { iosUpdateDeviceStatus.deviceId = n.getStringValue(); },
        "deviceModel": n => { iosUpdateDeviceStatus.deviceModel = n.getStringValue(); },
        "installStatus": n => { iosUpdateDeviceStatus.installStatus = n.getEnumValue<IosUpdatesInstallStatus>(IosUpdatesInstallStatus); },
        "lastReportedDateTime": n => { iosUpdateDeviceStatus.lastReportedDateTime = n.getDateValue(); },
        "osVersion": n => { iosUpdateDeviceStatus.osVersion = n.getStringValue(); },
        "status": n => { iosUpdateDeviceStatus.status = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userId": n => { iosUpdateDeviceStatus.userId = n.getStringValue(); },
        "userName": n => { iosUpdateDeviceStatus.userName = n.getStringValue(); },
        "userPrincipalName": n => { iosUpdateDeviceStatus.userPrincipalName = n.getStringValue(); },
    }
}
