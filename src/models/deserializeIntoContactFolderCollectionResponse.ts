import {ContactFolder} from './contactFolder';
import {ContactFolderCollectionResponse} from './contactFolderCollectionResponse';
import {createContactFolderFromDiscriminatorValue} from './createContactFolderFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeContactFolder} from './serializeContactFolder';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactFolderCollectionResponse(contactFolderCollectionResponse: ContactFolderCollectionResponse | undefined = {} as ContactFolderCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contactFolderCollectionResponse),
        "value": n => { contactFolderCollectionResponse.value = n.getCollectionOfObjectValues<ContactFolder>(createContactFolderFromDiscriminatorValue); },
    }
}
