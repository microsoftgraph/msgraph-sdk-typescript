import { type ItemActivityStat } from '../../../../../../../models/itemActivityStat';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeItemActivityStat } from '../../../../../../../models/serializeItemActivityStat';
import { type GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse } from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse(writer: SerializationWriter, getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined = {} as GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse)
        writer.writeCollectionOfObjectValues<ItemActivityStat>("value", getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse.value, serializeItemActivityStat);
}
