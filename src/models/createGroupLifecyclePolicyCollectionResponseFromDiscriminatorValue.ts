import {GroupLifecyclePolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupLifecyclePolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupLifecyclePolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupLifecyclePolicyCollectionResponseImpl();
}
