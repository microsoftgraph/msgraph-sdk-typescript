import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from './deviceCompliancePolicySettingStateSummaryCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDeviceCompliancePolicySettingStateSummary} from './serializeDeviceCompliancePolicySettingStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceCompliancePolicySettingStateSummaryCollectionResponse(deviceCompliancePolicySettingStateSummaryCollectionResponse: DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined = {} as DeviceCompliancePolicySettingStateSummaryCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, deviceCompliancePolicySettingStateSummaryCollectionResponse)
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummary>("value", deviceCompliancePolicySettingStateSummaryCollectionResponse.value, serializeDeviceCompliancePolicySettingStateSummary);
}
