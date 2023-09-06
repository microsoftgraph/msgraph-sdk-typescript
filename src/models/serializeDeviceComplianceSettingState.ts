import { ComplianceStatus } from './complianceStatus';
import { type DeviceComplianceSettingState } from './deviceComplianceSettingState';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceComplianceSettingState(writer: SerializationWriter, deviceComplianceSettingState: DeviceComplianceSettingState | undefined = {} as DeviceComplianceSettingState) : void {
        serializeEntity(writer, deviceComplianceSettingState)
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", deviceComplianceSettingState.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceId", deviceComplianceSettingState.deviceId);
        writer.writeStringValue("deviceModel", deviceComplianceSettingState.deviceModel);
        writer.writeStringValue("deviceName", deviceComplianceSettingState.deviceName);
        writer.writeStringValue("setting", deviceComplianceSettingState.setting);
        writer.writeStringValue("settingName", deviceComplianceSettingState.settingName);
        writer.writeEnumValue<ComplianceStatus>("state", deviceComplianceSettingState.state);
        writer.writeStringValue("userEmail", deviceComplianceSettingState.userEmail);
        writer.writeStringValue("userId", deviceComplianceSettingState.userId);
        writer.writeStringValue("userName", deviceComplianceSettingState.userName);
        writer.writeStringValue("userPrincipalName", deviceComplianceSettingState.userPrincipalName);
}
