import {createSettingStateDeviceSummaryFromDiscriminatorValue} from './createSettingStateDeviceSummaryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {SettingStateDeviceSummaryCollectionResponse} from './settingStateDeviceSummaryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingStateDeviceSummaryCollectionResponse(settingStateDeviceSummaryCollectionResponse: SettingStateDeviceSummaryCollectionResponse | undefined = {} as SettingStateDeviceSummaryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(settingStateDeviceSummaryCollectionResponse),
        "value": n => { settingStateDeviceSummaryCollectionResponse.value = n.getCollectionOfObjectValues<SettingStateDeviceSummary>(createSettingStateDeviceSummaryFromDiscriminatorValue); },
    }
}
