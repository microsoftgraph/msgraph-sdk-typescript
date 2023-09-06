import { createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue } from './createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DeviceCompliancePolicySettingStateSummary } from './deviceCompliancePolicySettingStateSummary';
import { type DeviceCompliancePolicySettingStateSummaryCollectionResponse } from './deviceCompliancePolicySettingStateSummaryCollectionResponse';
import { serializeDeviceCompliancePolicySettingStateSummary } from './serializeDeviceCompliancePolicySettingStateSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse(deviceCompliancePolicySettingStateSummaryCollectionResponse: DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined = {} as DeviceCompliancePolicySettingStateSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicySettingStateSummaryCollectionResponse),
        "value": n => { deviceCompliancePolicySettingStateSummaryCollectionResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>(createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue); },
    }
}
