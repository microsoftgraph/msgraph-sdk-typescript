import {deserializeIntoSubscriptionCollectionResponse} from './deserializeIntoSubscriptionCollectionResponse';
import {SubscriptionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubscriptionCollectionResponse;
}
