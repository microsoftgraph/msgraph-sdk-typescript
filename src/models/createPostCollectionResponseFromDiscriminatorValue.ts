import { deserializeIntoPostCollectionResponse } from './deserializeIntoPostCollectionResponse';
import { type PostCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPostCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPostCollectionResponse;
}
