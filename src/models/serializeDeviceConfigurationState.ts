import { ComplianceStatus } from './complianceStatus';
import { type DeviceConfigurationSettingState } from './deviceConfigurationSettingState';
import { type DeviceConfigurationState } from './deviceConfigurationState';
import { PolicyPlatformType } from './policyPlatformType';
import { serializeDeviceConfigurationSettingState } from './serializeDeviceConfigurationSettingState';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceConfigurationState(writer: SerializationWriter, deviceConfigurationState: DeviceConfigurationState | undefined = {} as DeviceConfigurationState) : void {
        serializeEntity(writer, deviceConfigurationState)
        writer.writeStringValue("displayName", deviceConfigurationState.displayName);
        writer.writeEnumValue<PolicyPlatformType>("platformType", deviceConfigurationState.platformType);
        writer.writeNumberValue("settingCount", deviceConfigurationState.settingCount);
        writer.writeCollectionOfObjectValues<DeviceConfigurationSettingState>("settingStates", deviceConfigurationState.settingStates, serializeDeviceConfigurationSettingState);
        writer.writeEnumValue<ComplianceStatus>("state", deviceConfigurationState.state);
        writer.writeNumberValue("version", deviceConfigurationState.version);
}
