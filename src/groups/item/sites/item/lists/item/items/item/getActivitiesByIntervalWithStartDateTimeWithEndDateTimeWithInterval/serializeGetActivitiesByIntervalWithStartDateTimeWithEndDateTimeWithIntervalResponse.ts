import {ItemActivityStat} from '../../../../../../../../../models/itemActivityStat';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from '../../../../../../../../../models/serializeItemActivityStat';
import {GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse} from './getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse(getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse: GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse | undefined = {} as GetActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse)
        writer.writeCollectionOfObjectValues<ItemActivityStat>("value", getActivitiesByIntervalWithStartDateTimeWithEndDateTimeWithIntervalResponse.value, serializeItemActivityStat);
}
