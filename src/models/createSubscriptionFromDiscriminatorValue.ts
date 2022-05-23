import {SubscriptionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscriptionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscriptionImpl();
}
