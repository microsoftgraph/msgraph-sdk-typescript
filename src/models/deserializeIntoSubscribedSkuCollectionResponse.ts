import { createSubscribedSkuFromDiscriminatorValue } from './createSubscribedSkuFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeSubscribedSku } from './serializeSubscribedSku';
import { type SubscribedSku } from './subscribedSku';
import { type SubscribedSkuCollectionResponse } from './subscribedSkuCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribedSkuCollectionResponse(subscribedSkuCollectionResponse: SubscribedSkuCollectionResponse | undefined = {} as SubscribedSkuCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subscribedSkuCollectionResponse),
        "value": n => { subscribedSkuCollectionResponse.value = n.getCollectionOfObjectValues<SubscribedSku>(createSubscribedSkuFromDiscriminatorValue); },
    }
}
