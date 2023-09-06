import { ComplianceStatus } from './complianceStatus';
import { createDeviceCompliancePolicySettingStateFromDiscriminatorValue } from './createDeviceCompliancePolicySettingStateFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DeviceCompliancePolicySettingState } from './deviceCompliancePolicySettingState';
import { type DeviceCompliancePolicyState } from './deviceCompliancePolicyState';
import { PolicyPlatformType } from './policyPlatformType';
import { serializeDeviceCompliancePolicySettingState } from './serializeDeviceCompliancePolicySettingState';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicyState(deviceCompliancePolicyState: DeviceCompliancePolicyState | undefined = {} as DeviceCompliancePolicyState) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceCompliancePolicyState),
        "displayName": n => { deviceCompliancePolicyState.displayName = n.getStringValue(); },
        "platformType": n => { deviceCompliancePolicyState.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType); },
        "settingCount": n => { deviceCompliancePolicyState.settingCount = n.getNumberValue(); },
        "settingStates": n => { deviceCompliancePolicyState.settingStates = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingState>(createDeviceCompliancePolicySettingStateFromDiscriminatorValue); },
        "state": n => { deviceCompliancePolicyState.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
        "version": n => { deviceCompliancePolicyState.version = n.getNumberValue(); },
    }
}
