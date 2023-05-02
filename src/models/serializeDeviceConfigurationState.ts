import {ComplianceStatus} from './complianceStatus';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {PolicyPlatformType} from './policyPlatformType';
import {serializeDeviceConfigurationSettingState} from './serializeDeviceConfigurationSettingState';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationState(writer: SerializationWriter, deviceConfigurationState: DeviceConfigurationState | undefined = {} as DeviceConfigurationState) : void {
        serializeEntity(writer, deviceConfigurationState)
        writer.writeStringValue("displayName", deviceConfigurationState.displayName);
        writer.writeEnumValue<PolicyPlatformType>("platformType", deviceConfigurationState.platformType);
        writer.writeNumberValue("settingCount", deviceConfigurationState.settingCount);
        writer.writeCollectionOfObjectValues<DeviceConfigurationSettingState>("settingStates", deviceConfigurationState.settingStates, serializeDeviceConfigurationSettingState);
        writer.writeEnumValue<ComplianceStatus>("state", deviceConfigurationState.state);
        writer.writeNumberValue("version", deviceConfigurationState.version);
}
