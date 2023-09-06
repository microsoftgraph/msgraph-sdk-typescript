import { deserializeIntoSetCollectionResponse } from './deserializeIntoSetCollectionResponse';
import { type SetCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetCollectionResponse;
}
