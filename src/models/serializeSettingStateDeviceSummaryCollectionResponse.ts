import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {SettingStateDeviceSummaryCollectionResponse} from './settingStateDeviceSummaryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingStateDeviceSummaryCollectionResponse(writer: SerializationWriter, settingStateDeviceSummaryCollectionResponse: SettingStateDeviceSummaryCollectionResponse | undefined = {} as SettingStateDeviceSummaryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, settingStateDeviceSummaryCollectionResponse)
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummary>("value", settingStateDeviceSummaryCollectionResponse.value, serializeSettingStateDeviceSummary);
}
