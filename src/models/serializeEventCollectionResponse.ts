import { type Event } from './event';
import { type EventCollectionResponse } from './eventCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeEvent } from './serializeEvent';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEventCollectionResponse(writer: SerializationWriter, eventCollectionResponse: EventCollectionResponse | undefined = {} as EventCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, eventCollectionResponse)
        writer.writeCollectionOfObjectValues<Event>("value", eventCollectionResponse.value, serializeEvent);
}
