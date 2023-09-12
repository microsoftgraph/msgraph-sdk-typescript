import { type DeviceCompliancePolicySettingStateSummary } from './deviceCompliancePolicySettingStateSummary';
import { type DeviceCompliancePolicySettingStateSummaryCollectionResponse } from './deviceCompliancePolicySettingStateSummaryCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDeviceCompliancePolicySettingStateSummary } from './serializeDeviceCompliancePolicySettingStateSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicySettingStateSummaryCollectionResponse(writer: SerializationWriter, deviceCompliancePolicySettingStateSummaryCollectionResponse: DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined = {} as DeviceCompliancePolicySettingStateSummaryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicySettingStateSummaryCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>("value", deviceCompliancePolicySettingStateSummaryCollectionResponse.value, serializeDeviceCompliancePolicySettingStateSummary);
}
