import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSubscription } from './serializeSubscription';
import { type Subscription } from './subscription';
import { type SubscriptionCollectionResponse } from './subscriptionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubscriptionCollectionResponse(writer: SerializationWriter, subscriptionCollectionResponse: SubscriptionCollectionResponse | undefined = {} as SubscriptionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subscriptionCollectionResponse)
        writer.writeCollectionOfObjectValues<Subscription>("value", subscriptionCollectionResponse.value, serializeSubscription);
}
