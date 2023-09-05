import { deserializeIntoSubscription } from './deserializeIntoSubscription';
import { type Subscription } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubscriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscription;
}
