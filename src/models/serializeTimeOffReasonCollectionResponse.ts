import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTimeOffReason } from './serializeTimeOffReason';
import { type TimeOffReason } from './timeOffReason';
import { type TimeOffReasonCollectionResponse } from './timeOffReasonCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTimeOffReasonCollectionResponse(writer: SerializationWriter, timeOffReasonCollectionResponse: TimeOffReasonCollectionResponse | undefined = {} as TimeOffReasonCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeOffReasonCollectionResponse)
        writer.writeCollectionOfObjectValues<TimeOffReason>("value", timeOffReasonCollectionResponse.value, serializeTimeOffReason);
}
