import {DeviceCompliancePolicySettingStateSummaryImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicySettingStateSummaryImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicySettingStateSummaryImpl();
}
