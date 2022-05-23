import {SubscriptionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscriptionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscriptionCollectionResponseImpl();
}
