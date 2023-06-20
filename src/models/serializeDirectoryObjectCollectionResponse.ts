import {DirectoryObject} from './directoryObject';
import {DirectoryObjectCollectionResponse} from './directoryObjectCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObjectCollectionResponse(directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {} as DirectoryObjectCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryObjectCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryObject>("value", directoryObjectCollectionResponse.value, serializeDirectoryObject);
}
