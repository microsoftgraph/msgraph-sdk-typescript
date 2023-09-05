import { deserializeIntoGroupCollectionResponse } from './deserializeIntoGroupCollectionResponse';
import { type GroupCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupCollectionResponse;
}
