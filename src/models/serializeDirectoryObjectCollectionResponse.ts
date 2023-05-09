import {DirectoryObject} from './directoryObject';
import {DirectoryObjectCollectionResponse} from './directoryObjectCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObjectCollectionResponse(writer: SerializationWriter, directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {} as DirectoryObjectCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryObjectCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryObject>("value", directoryObjectCollectionResponse.value, serializeDirectoryObject);
}
