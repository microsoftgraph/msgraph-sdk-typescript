import { deserializeIntoDeviceCompliancePolicySettingState } from './deserializeIntoDeviceCompliancePolicySettingState';
import { type DeviceCompliancePolicySettingState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicySettingState;
}
