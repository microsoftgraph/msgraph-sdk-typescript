import { createDeviceComplianceSettingStateFromDiscriminatorValue } from './createDeviceComplianceSettingStateFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceCompliancePolicySettingStateSummary } from './deviceCompliancePolicySettingStateSummary';
import { type DeviceComplianceSettingState } from './deviceComplianceSettingState';
import { PolicyPlatformType } from './policyPlatformType';
import { serializeDeviceComplianceSettingState } from './serializeDeviceComplianceSettingState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingStateSummary(deviceCompliancePolicySettingStateSummary: DeviceCompliancePolicySettingStateSummary | undefined = {} as DeviceCompliancePolicySettingStateSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicySettingStateSummary),
        "compliantDeviceCount": n => { deviceCompliancePolicySettingStateSummary.compliantDeviceCount = n.getNumberValue(); },
        "conflictDeviceCount": n => { deviceCompliancePolicySettingStateSummary.conflictDeviceCount = n.getNumberValue(); },
        "deviceComplianceSettingStates": n => { deviceCompliancePolicySettingStateSummary.deviceComplianceSettingStates = n.getCollectionOfObjectValues<DeviceComplianceSettingState>(createDeviceComplianceSettingStateFromDiscriminatorValue); },
        "errorDeviceCount": n => { deviceCompliancePolicySettingStateSummary.errorDeviceCount = n.getNumberValue(); },
        "nonCompliantDeviceCount": n => { deviceCompliancePolicySettingStateSummary.nonCompliantDeviceCount = n.getNumberValue(); },
        "notApplicableDeviceCount": n => { deviceCompliancePolicySettingStateSummary.notApplicableDeviceCount = n.getNumberValue(); },
        "platformType": n => { deviceCompliancePolicySettingStateSummary.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType); },
        "remediatedDeviceCount": n => { deviceCompliancePolicySettingStateSummary.remediatedDeviceCount = n.getNumberValue(); },
        "setting": n => { deviceCompliancePolicySettingStateSummary.setting = n.getStringValue(); },
        "settingName": n => { deviceCompliancePolicySettingStateSummary.settingName = n.getStringValue(); },
        "unknownDeviceCount": n => { deviceCompliancePolicySettingStateSummary.unknownDeviceCount = n.getNumberValue(); },
    }
}
