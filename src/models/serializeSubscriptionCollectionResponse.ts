import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubscription} from './serializeSubscription';
import type {Subscription} from './subscription';
import type {SubscriptionCollectionResponse} from './subscriptionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscriptionCollectionResponse(writer: SerializationWriter, subscriptionCollectionResponse: SubscriptionCollectionResponse | undefined = {} as SubscriptionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subscriptionCollectionResponse)
        writer.writeCollectionOfObjectValues<Subscription>("value", subscriptionCollectionResponse.value, serializeSubscription);
}
