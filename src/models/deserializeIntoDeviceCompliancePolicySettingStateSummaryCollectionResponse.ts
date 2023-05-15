import {createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue} from './createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from './deviceCompliancePolicySettingStateSummaryCollectionResponse';
import {serializeDeviceCompliancePolicySettingStateSummary} from './serializeDeviceCompliancePolicySettingStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceCompliancePolicySettingStateSummaryCollectionResponse(deviceCompliancePolicySettingStateSummaryCollectionResponse: DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined = {} as DeviceCompliancePolicySettingStateSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceCompliancePolicySettingStateSummaryCollectionResponse),
        "value": n => { deviceCompliancePolicySettingStateSummaryCollectionResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>(createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue); },
    }
}
