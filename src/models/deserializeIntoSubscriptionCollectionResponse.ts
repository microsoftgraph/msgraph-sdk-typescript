import { createSubscriptionFromDiscriminatorValue } from './createSubscriptionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSubscription } from './serializeSubscription';
import { type Subscription } from './subscription';
import { type SubscriptionCollectionResponse } from './subscriptionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscriptionCollectionResponse(subscriptionCollectionResponse: SubscriptionCollectionResponse | undefined = {} as SubscriptionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subscriptionCollectionResponse),
        "value": n => { subscriptionCollectionResponse.value = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); },
    }
}
