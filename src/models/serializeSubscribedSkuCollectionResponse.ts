import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSubscribedSku} from './serializeSubscribedSku';
import {SubscribedSku} from './subscribedSku';
import {SubscribedSkuCollectionResponse} from './subscribedSkuCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribedSkuCollectionResponse(writer: SerializationWriter, subscribedSkuCollectionResponse: SubscribedSkuCollectionResponse | undefined = {} as SubscribedSkuCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, subscribedSkuCollectionResponse)
        writer.writeCollectionOfObjectValues<SubscribedSku>("value", subscribedSkuCollectionResponse.value, serializeSubscribedSku);
}
