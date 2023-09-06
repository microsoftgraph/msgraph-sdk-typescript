import { deserializeIntoCallCollectionResponse } from './deserializeIntoCallCollectionResponse';
import { type CallCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallCollectionResponse;
}
