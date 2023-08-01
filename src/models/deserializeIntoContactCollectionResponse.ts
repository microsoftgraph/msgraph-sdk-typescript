import type {Contact} from './contact';
import type {ContactCollectionResponse} from './contactCollectionResponse';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeContact} from './serializeContact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactCollectionResponse(contactCollectionResponse: ContactCollectionResponse | undefined = {} as ContactCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contactCollectionResponse),
        "value": n => { contactCollectionResponse.value = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
    }
}
