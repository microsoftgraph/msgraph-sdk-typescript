import {DeviceCompliancePolicySettingStateSummaryCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicySettingStateSummaryCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicySettingStateSummaryCollectionResponseImpl();
}
