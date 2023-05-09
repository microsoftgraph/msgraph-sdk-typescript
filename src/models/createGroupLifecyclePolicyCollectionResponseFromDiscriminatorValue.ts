import {deserializeIntoGroupLifecyclePolicyCollectionResponse} from './deserializeIntoGroupLifecyclePolicyCollectionResponse';
import {GroupLifecyclePolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupLifecyclePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupLifecyclePolicyCollectionResponse;
}
