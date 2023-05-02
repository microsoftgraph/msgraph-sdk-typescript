import {deserializeIntoDeviceCompliancePolicySettingStateSummary} from './deserializeIntoDeviceCompliancePolicySettingStateSummary';
import {DeviceCompliancePolicySettingStateSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicySettingStateSummary;
}
