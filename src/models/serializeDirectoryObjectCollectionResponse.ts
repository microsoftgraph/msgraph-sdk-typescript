import { type DirectoryObject } from './directoryObject';
import { type DirectoryObjectCollectionResponse } from './directoryObjectCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDirectoryObjectCollectionResponse(writer: SerializationWriter, directoryObjectCollectionResponse: DirectoryObjectCollectionResponse | undefined = {} as DirectoryObjectCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryObjectCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryObject>("value", directoryObjectCollectionResponse.value, serializeDirectoryObject);
}
