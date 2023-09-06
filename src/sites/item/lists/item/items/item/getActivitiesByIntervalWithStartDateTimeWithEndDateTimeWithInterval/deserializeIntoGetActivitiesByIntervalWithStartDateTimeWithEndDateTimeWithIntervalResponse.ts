import { createItemActivityStatFromDiscriminatorValue } from '../../../../../../../models/createItemActivityStatFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type ItemActivityStat } from '../../../../../../../models/itemActivityStat';
import { serializeItemActivityStat } from '../../../../../../../models/serializeItemActivityStat';
import { type GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse } from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined = {} as GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse),
        "value": n => { getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse.value = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
    }
}
