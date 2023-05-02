import {createSubscribedSkuFromDiscriminatorValue} from './createSubscribedSkuFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSubscribedSku} from './serializeSubscribedSku';
import {SubscribedSku} from './subscribedSku';
import {SubscribedSkuCollectionResponse} from './subscribedSkuCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribedSkuCollectionResponse(subscribedSkuCollectionResponse: SubscribedSkuCollectionResponse | undefined = {} as SubscribedSkuCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(subscribedSkuCollectionResponse),
        "value": n => { subscribedSkuCollectionResponse.value = n.getCollectionOfObjectValues<SubscribedSku>(createSubscribedSkuFromDiscriminatorValue); },
    }
}
