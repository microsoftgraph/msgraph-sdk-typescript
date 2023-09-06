import { deserializeIntoDirectoryObjectCollectionResponse } from './deserializeIntoDirectoryObjectCollectionResponse';
import { type DirectoryObjectCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryObjectCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryObjectCollectionResponse;
}
