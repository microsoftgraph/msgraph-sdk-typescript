import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicySettingState {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicySettingState();
}
