import {GroupLifecyclePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGroupLifecyclePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GroupLifecyclePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GroupLifecyclePolicyImpl();
}
