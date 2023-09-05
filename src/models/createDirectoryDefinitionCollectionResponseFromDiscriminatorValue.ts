import { deserializeIntoDirectoryDefinitionCollectionResponse } from './deserializeIntoDirectoryDefinitionCollectionResponse';
import { type DirectoryDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryDefinitionCollectionResponse;
}
