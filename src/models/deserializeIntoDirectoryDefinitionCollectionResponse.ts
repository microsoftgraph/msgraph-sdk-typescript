import {createDirectoryDefinitionFromDiscriminatorValue} from './createDirectoryDefinitionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {DirectoryDefinition} from './directoryDefinition';
import {DirectoryDefinitionCollectionResponse} from './directoryDefinitionCollectionResponse';
import {serializeDirectoryDefinition} from './serializeDirectoryDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryDefinitionCollectionResponse(directoryDefinitionCollectionResponse: DirectoryDefinitionCollectionResponse | undefined = {} as DirectoryDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(directoryDefinitionCollectionResponse),
        "value": n => { directoryDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<DirectoryDefinition>(createDirectoryDefinitionFromDiscriminatorValue); },
    }
}
