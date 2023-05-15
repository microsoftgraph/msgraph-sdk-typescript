import {ComplianceStatus} from './complianceStatus';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceComplianceSettingState(deviceComplianceSettingState: DeviceComplianceSettingState | undefined = {} as DeviceComplianceSettingState) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceComplianceSettingState),
        "complianceGracePeriodExpirationDateTime": n => { deviceComplianceSettingState.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
        "deviceId": n => { deviceComplianceSettingState.deviceId = n.getStringValue(); },
        "deviceModel": n => { deviceComplianceSettingState.deviceModel = n.getStringValue(); },
        "deviceName": n => { deviceComplianceSettingState.deviceName = n.getStringValue(); },
        "setting": n => { deviceComplianceSettingState.setting = n.getStringValue(); },
        "settingName": n => { deviceComplianceSettingState.settingName = n.getStringValue(); },
        "state": n => { deviceComplianceSettingState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "userEmail": n => { deviceComplianceSettingState.userEmail = n.getStringValue(); },
        "userId": n => { deviceComplianceSettingState.userId = n.getStringValue(); },
        "userName": n => { deviceComplianceSettingState.userName = n.getStringValue(); },
        "userPrincipalName": n => { deviceComplianceSettingState.userPrincipalName = n.getStringValue(); },
    }
}
