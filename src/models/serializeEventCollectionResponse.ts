import {Event} from './event';
import {EventCollectionResponse} from './eventCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeEvent} from './serializeEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventCollectionResponse(eventCollectionResponse: EventCollectionResponse | undefined = {} as EventCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, eventCollectionResponse)
        writer.writeCollectionOfObjectValues<Event>("value", eventCollectionResponse.value, serializeEvent);
}
