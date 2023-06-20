import {Contact} from './contact';
import {ContactCollectionResponse} from './contactCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContact} from './serializeContact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactCollectionResponse(contactCollectionResponse: ContactCollectionResponse | undefined = {} as ContactCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contactCollectionResponse)
        writer.writeCollectionOfObjectValues<Contact>("value", contactCollectionResponse.value, serializeContact);
}
