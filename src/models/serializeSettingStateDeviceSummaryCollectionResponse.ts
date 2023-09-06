import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSettingStateDeviceSummary } from './serializeSettingStateDeviceSummary';
import { type SettingStateDeviceSummary } from './settingStateDeviceSummary';
import { type SettingStateDeviceSummaryCollectionResponse } from './settingStateDeviceSummaryCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSettingStateDeviceSummaryCollectionResponse(writer: SerializationWriter, settingStateDeviceSummaryCollectionResponse: SettingStateDeviceSummaryCollectionResponse | undefined = {} as SettingStateDeviceSummaryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, settingStateDeviceSummaryCollectionResponse)
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummary>("value", settingStateDeviceSummaryCollectionResponse.value, serializeSettingStateDeviceSummary);
}
