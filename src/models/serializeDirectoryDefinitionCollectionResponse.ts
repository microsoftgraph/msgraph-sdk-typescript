import { type DirectoryDefinition } from './directoryDefinition';
import { type DirectoryDefinitionCollectionResponse } from './directoryDefinitionCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeDirectoryDefinition } from './serializeDirectoryDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDirectoryDefinitionCollectionResponse(writer: SerializationWriter, directoryDefinitionCollectionResponse: DirectoryDefinitionCollectionResponse | undefined = {} as DirectoryDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryDefinition>("value", directoryDefinitionCollectionResponse.value, serializeDirectoryDefinition);
}
