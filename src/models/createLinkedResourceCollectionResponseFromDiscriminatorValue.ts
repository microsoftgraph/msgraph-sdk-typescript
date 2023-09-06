import { deserializeIntoLinkedResourceCollectionResponse } from './deserializeIntoLinkedResourceCollectionResponse';
import { type LinkedResourceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLinkedResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLinkedResourceCollectionResponse;
}
