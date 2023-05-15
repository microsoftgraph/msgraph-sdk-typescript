import {ComplianceStatus} from './complianceStatus';
import {createDeviceConfigurationSettingStateFromDiscriminatorValue} from './createDeviceConfigurationSettingStateFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {PolicyPlatformType} from './policyPlatformType';
import {serializeDeviceConfigurationSettingState} from './serializeDeviceConfigurationSettingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceConfigurationState(deviceConfigurationState: DeviceConfigurationState | undefined = {} as DeviceConfigurationState) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfigurationState),
        "displayName": n => { deviceConfigurationState.displayName = n.getStringValue(); },
        "platformType": n => { deviceConfigurationState.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType); },
        "settingCount": n => { deviceConfigurationState.settingCount = n.getNumberValue(); },
        "settingStates": n => { deviceConfigurationState.settingStates = n.getCollectionOfObjectValues<DeviceConfigurationSettingState>(createDeviceConfigurationSettingStateFromDiscriminatorValue); },
        "state": n => { deviceConfigurationState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "version": n => { deviceConfigurationState.version = n.getNumberValue(); },
    }
}
