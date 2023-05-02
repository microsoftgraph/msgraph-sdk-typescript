import {createItemActivityStatFromDiscriminatorValue} from '../../../../../../../models/createItemActivityStatFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {ItemActivityStat} from '../../../../../../../models/itemActivityStat';
import {serializeItemActivityStat} from '../../../../../../../models/serializeItemActivityStat';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined = {} as GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse),
        "value": n => { getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse.value = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
    }
}
