import {deserializeIntoDirectoryDefinitionCollectionResponse} from './deserializeIntoDirectoryDefinitionCollectionResponse';
import {DirectoryDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryDefinitionCollectionResponse;
}
