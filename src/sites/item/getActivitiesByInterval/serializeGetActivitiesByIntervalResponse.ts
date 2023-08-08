import type {ItemActivityStat} from '../../../models/itemActivityStat';
import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from '../../../models/serializeItemActivityStat';
import type {GetActivitiesByIntervalResponse} from './getActivitiesByIntervalResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetActivitiesByIntervalResponse(writer: SerializationWriter, getActivitiesByIntervalResponse: GetActivitiesByIntervalResponse | undefined = {} as GetActivitiesByIntervalResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getActivitiesByIntervalResponse)
        writer.writeCollectionOfObjectValues<ItemActivityStat>("value", getActivitiesByIntervalResponse.value, serializeItemActivityStat);
}
