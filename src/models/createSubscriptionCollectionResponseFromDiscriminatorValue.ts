import { deserializeIntoSubscriptionCollectionResponse } from './deserializeIntoSubscriptionCollectionResponse';
import { type SubscriptionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSubscriptionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscriptionCollectionResponse;
}
