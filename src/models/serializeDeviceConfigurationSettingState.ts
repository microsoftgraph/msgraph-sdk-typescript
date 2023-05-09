import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {serializeSettingSource} from './serializeSettingSource';
import {SettingSource} from './settingSource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationSettingState(writer: SerializationWriter, deviceConfigurationSettingState: DeviceConfigurationSettingState | undefined = {} as DeviceConfigurationSettingState) : void {
        writer.writeStringValue("currentValue", deviceConfigurationSettingState.currentValue);
        writer.writeNumberValue("errorCode", deviceConfigurationSettingState.errorCode);
        writer.writeStringValue("errorDescription", deviceConfigurationSettingState.errorDescription);
        writer.writeStringValue("instanceDisplayName", deviceConfigurationSettingState.instanceDisplayName);
        writer.writeStringValue("@odata.type", deviceConfigurationSettingState.odataType);
        writer.writeStringValue("setting", deviceConfigurationSettingState.setting);
        writer.writeStringValue("settingName", deviceConfigurationSettingState.settingName);
        writer.writeCollectionOfObjectValues<SettingSource>("sources", deviceConfigurationSettingState.sources, serializeSettingSource);
        writer.writeEnumValue<ComplianceStatus>("state", deviceConfigurationSettingState.state);
        writer.writeStringValue("userEmail", deviceConfigurationSettingState.userEmail);
        writer.writeStringValue("userId", deviceConfigurationSettingState.userId);
        writer.writeStringValue("userName", deviceConfigurationSettingState.userName);
        writer.writeStringValue("userPrincipalName", deviceConfigurationSettingState.userPrincipalName);
        writer.writeAdditionalData(deviceConfigurationSettingState.additionalData);
}
