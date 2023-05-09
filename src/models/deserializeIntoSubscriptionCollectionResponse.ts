import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSubscription} from './serializeSubscription';
import {Subscription} from './subscription';
import {SubscriptionCollectionResponse} from './subscriptionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscriptionCollectionResponse(subscriptionCollectionResponse: SubscriptionCollectionResponse | undefined = {} as SubscriptionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subscriptionCollectionResponse),
        "value": n => { subscriptionCollectionResponse.value = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); },
    }
}
