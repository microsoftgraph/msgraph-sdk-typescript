import { deserializeIntoGroupLifecyclePolicyCollectionResponse } from './deserializeIntoGroupLifecyclePolicyCollectionResponse';
import { type GroupLifecyclePolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGroupLifecyclePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupLifecyclePolicyCollectionResponse;
}
