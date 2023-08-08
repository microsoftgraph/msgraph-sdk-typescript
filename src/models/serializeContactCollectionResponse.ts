import type {Contact} from './contact';
import type {ContactCollectionResponse} from './contactCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContact} from './serializeContact';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactCollectionResponse(writer: SerializationWriter, contactCollectionResponse: ContactCollectionResponse | undefined = {} as ContactCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contactCollectionResponse)
        writer.writeCollectionOfObjectValues<Contact>("value", contactCollectionResponse.value, serializeContact);
}
