import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTimeOffRequest} from './serializeTimeOffRequest';
import type {TimeOffRequest} from './timeOffRequest';
import type {TimeOffRequestCollectionResponse} from './timeOffRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeOffRequestCollectionResponse(writer: SerializationWriter, timeOffRequestCollectionResponse: TimeOffRequestCollectionResponse | undefined = {} as TimeOffRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, timeOffRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<TimeOffRequest>("value", timeOffRequestCollectionResponse.value, serializeTimeOffRequest);
}
