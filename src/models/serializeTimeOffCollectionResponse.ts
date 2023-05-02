import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeOff} from './serializeTimeOff';
import {TimeOff} from './timeOff';
import {TimeOffCollectionResponse} from './timeOffCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffCollectionResponse(writer: SerializationWriter, timeOffCollectionResponse: TimeOffCollectionResponse | undefined = {} as TimeOffCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeOffCollectionResponse)
        writer.writeCollectionOfObjectValues<TimeOff>("value", timeOffCollectionResponse.value, serializeTimeOff);
}
