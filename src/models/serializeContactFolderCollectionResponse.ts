import {ContactFolder} from './contactFolder';
import {ContactFolderCollectionResponse} from './contactFolderCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContactFolder} from './serializeContactFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactFolderCollectionResponse(writer: SerializationWriter, contactFolderCollectionResponse: ContactFolderCollectionResponse | undefined = {} as ContactFolderCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contactFolderCollectionResponse)
        writer.writeCollectionOfObjectValues<ContactFolder>("value", contactFolderCollectionResponse.value, serializeContactFolder);
}
