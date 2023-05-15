import {deserializeIntoDirectoryObjectCollectionResponse} from './deserializeIntoDirectoryObjectCollectionResponse';
import {DirectoryObjectCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryObjectCollectionResponse;
}
