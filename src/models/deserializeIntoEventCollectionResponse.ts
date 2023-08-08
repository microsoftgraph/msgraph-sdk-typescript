import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {Event} from './event';
import type {EventCollectionResponse} from './eventCollectionResponse';
import {serializeEvent} from './serializeEvent';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventCollectionResponse(eventCollectionResponse: EventCollectionResponse | undefined = {} as EventCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(eventCollectionResponse),
        "value": n => { eventCollectionResponse.value = n.getCollectionOfObjectValues<Event>(createEventFromDiscriminatorValue); },
    }
}
