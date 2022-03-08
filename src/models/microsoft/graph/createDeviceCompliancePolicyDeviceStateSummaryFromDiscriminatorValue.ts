import {DeviceCompliancePolicyDeviceStateSummary} from './deviceCompliancePolicyDeviceStateSummary';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyDeviceStateSummary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyDeviceStateSummary();
}
