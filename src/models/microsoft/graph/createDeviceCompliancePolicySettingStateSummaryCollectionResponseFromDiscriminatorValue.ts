import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from './deviceCompliancePolicySettingStateSummaryCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicySettingStateSummaryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeviceCompliancePolicySettingStateSummaryCollectionResponse();
}
