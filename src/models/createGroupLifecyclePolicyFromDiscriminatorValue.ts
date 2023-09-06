import { deserializeIntoGroupLifecyclePolicy } from './deserializeIntoGroupLifecyclePolicy';
import { type GroupLifecyclePolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGroupLifecyclePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupLifecyclePolicy;
}
