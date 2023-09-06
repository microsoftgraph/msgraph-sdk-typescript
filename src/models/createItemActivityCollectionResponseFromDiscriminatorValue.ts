import { deserializeIntoItemActivityCollectionResponse } from './deserializeIntoItemActivityCollectionResponse';
import { type ItemActivityCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemActivityCollectionResponse;
}
