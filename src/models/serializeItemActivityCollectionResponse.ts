import { type ItemActivity } from './itemActivity';
import { type ItemActivityCollectionResponse } from './itemActivityCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeItemActivity } from './serializeItemActivity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeItemActivityCollectionResponse(writer: SerializationWriter, itemActivityCollectionResponse: ItemActivityCollectionResponse | undefined = {} as ItemActivityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, itemActivityCollectionResponse)
        writer.writeCollectionOfObjectValues<ItemActivity>("value", itemActivityCollectionResponse.value, serializeItemActivity);
}
