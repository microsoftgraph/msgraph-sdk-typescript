import {ComplianceStatus} from './complianceStatus';
import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {serializeSettingSource} from './serializeSettingSource';
import {SettingSource} from './settingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicySettingState(writer: SerializationWriter, deviceCompliancePolicySettingState: DeviceCompliancePolicySettingState | undefined = {} as DeviceCompliancePolicySettingState) : void {
        writer.writeStringValue("currentValue", deviceCompliancePolicySettingState.currentValue);
        writer.writeNumberValue("errorCode", deviceCompliancePolicySettingState.errorCode);
        writer.writeStringValue("errorDescription", deviceCompliancePolicySettingState.errorDescription);
        writer.writeStringValue("instanceDisplayName", deviceCompliancePolicySettingState.instanceDisplayName);
        writer.writeStringValue("@odata.type", deviceCompliancePolicySettingState.odataType);
        writer.writeStringValue("setting", deviceCompliancePolicySettingState.setting);
        writer.writeStringValue("settingName", deviceCompliancePolicySettingState.settingName);
        writer.writeCollectionOfObjectValues<SettingSource>("sources", deviceCompliancePolicySettingState.sources, serializeSettingSource);
        writer.writeEnumValue<ComplianceStatus>("state", deviceCompliancePolicySettingState.state);
        writer.writeStringValue("userEmail", deviceCompliancePolicySettingState.userEmail);
        writer.writeStringValue("userId", deviceCompliancePolicySettingState.userId);
        writer.writeStringValue("userName", deviceCompliancePolicySettingState.userName);
        writer.writeStringValue("userPrincipalName", deviceCompliancePolicySettingState.userPrincipalName);
        writer.writeAdditionalData(deviceCompliancePolicySettingState.additionalData);
}
