import { deserializeIntoBaseItemCollectionResponse } from './deserializeIntoBaseItemCollectionResponse';
import { type BaseItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBaseItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBaseItemCollectionResponse;
}
