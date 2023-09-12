import { deserializeIntoContentTypeCollectionResponse } from './deserializeIntoContentTypeCollectionResponse';
import { type ContentTypeCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createContentTypeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContentTypeCollectionResponse;
}
