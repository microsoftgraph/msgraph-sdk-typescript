import {deserializeIntoDeviceCompliancePolicyDeviceStateSummary} from './deserializeIntoDeviceCompliancePolicyDeviceStateSummary';
import {DeviceCompliancePolicyDeviceStateSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicyDeviceStateSummary;
}
