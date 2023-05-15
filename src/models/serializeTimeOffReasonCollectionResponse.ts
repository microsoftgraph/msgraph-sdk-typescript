import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeOffReason} from './serializeTimeOffReason';
import {TimeOffReason} from './timeOffReason';
import {TimeOffReasonCollectionResponse} from './timeOffReasonCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffReasonCollectionResponse(writer: SerializationWriter, timeOffReasonCollectionResponse: TimeOffReasonCollectionResponse | undefined = {} as TimeOffReasonCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeOffReasonCollectionResponse)
        writer.writeCollectionOfObjectValues<TimeOffReason>("value", timeOffReasonCollectionResponse.value, serializeTimeOffReason);
}
