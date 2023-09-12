import { type ContactFolder } from './contactFolder';
import { type ContactFolderCollectionResponse } from './contactFolderCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeContactFolder } from './serializeContactFolder';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeContactFolderCollectionResponse(writer: SerializationWriter, contactFolderCollectionResponse: ContactFolderCollectionResponse | undefined = {} as ContactFolderCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contactFolderCollectionResponse)
        writer.writeCollectionOfObjectValues<ContactFolder>("value", contactFolderCollectionResponse.value, serializeContactFolder);
}
