import { deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse } from './deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse';
import { type DeviceCompliancePolicySettingStateSummaryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse;
}
