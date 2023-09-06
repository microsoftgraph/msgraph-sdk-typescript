import { createDirectoryDefinitionFromDiscriminatorValue } from './createDirectoryDefinitionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type DirectoryDefinition } from './directoryDefinition';
import { type DirectoryDefinitionCollectionResponse } from './directoryDefinitionCollectionResponse';
import { serializeDirectoryDefinition } from './serializeDirectoryDefinition';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryDefinitionCollectionResponse(directoryDefinitionCollectionResponse: DirectoryDefinitionCollectionResponse | undefined = {} as DirectoryDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryDefinitionCollectionResponse),
        "value": n => { directoryDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryDefinition>(createDirectoryDefinitionFromDiscriminatorValue); },
    }
}
