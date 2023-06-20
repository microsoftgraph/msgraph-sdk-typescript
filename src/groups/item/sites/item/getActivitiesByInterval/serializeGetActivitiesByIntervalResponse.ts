import {ItemActivityStat} from '../../../../../models/itemActivityStat';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from '../../../../../models/serializeItemActivityStat';
import {GetActivitiesByIntervalResponse} from './getActivitiesByIntervalResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetActivitiesByIntervalResponse(getActivitiesByIntervalResponse: GetActivitiesByIntervalResponse | undefined = {} as GetActivitiesByIntervalResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getActivitiesByIntervalResponse)
        writer.writeCollectionOfObjectValues<ItemActivityStat>("value", getActivitiesByIntervalResponse.value, serializeItemActivityStat);
}
