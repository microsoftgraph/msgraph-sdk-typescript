import {DirectoryDefinition} from './directoryDefinition';
import {DirectoryDefinitionCollectionResponse} from './directoryDefinitionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDirectoryDefinition} from './serializeDirectoryDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryDefinitionCollectionResponse(writer: SerializationWriter, directoryDefinitionCollectionResponse: DirectoryDefinitionCollectionResponse | undefined = {} as DirectoryDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, directoryDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<DirectoryDefinition>("value", directoryDefinitionCollectionResponse.value, serializeDirectoryDefinition);
}
