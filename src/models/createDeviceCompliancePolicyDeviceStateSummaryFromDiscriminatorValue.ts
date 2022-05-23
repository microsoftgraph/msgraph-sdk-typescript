import {DeviceCompliancePolicyDeviceStateSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyDeviceStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicyDeviceStateSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicyDeviceStateSummaryImpl();
}
