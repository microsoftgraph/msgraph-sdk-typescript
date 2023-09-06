import { deserializeIntoActivityBasedTimeoutPolicy } from './deserializeIntoActivityBasedTimeoutPolicy';
import { type ActivityBasedTimeoutPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createActivityBasedTimeoutPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoActivityBasedTimeoutPolicy;
}
