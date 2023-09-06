import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeSubscribedSku } from './serializeSubscribedSku';
import { type SubscribedSku } from './subscribedSku';
import { type SubscribedSkuCollectionResponse } from './subscribedSkuCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubscribedSkuCollectionResponse(writer: SerializationWriter, subscribedSkuCollectionResponse: SubscribedSkuCollectionResponse | undefined = {} as SubscribedSkuCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subscribedSkuCollectionResponse)
        writer.writeCollectionOfObjectValues<SubscribedSku>("value", subscribedSkuCollectionResponse.value, serializeSubscribedSku);
}
