import { createItemActivityFromDiscriminatorValue } from './createItemActivityFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ItemActivity } from './itemActivity';
import { type ItemActivityCollectionResponse } from './itemActivityCollectionResponse';
import { serializeItemActivity } from './serializeItemActivity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityCollectionResponse(itemActivityCollectionResponse: ItemActivityCollectionResponse | undefined = {} as ItemActivityCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(itemActivityCollectionResponse),
        "value": n => { itemActivityCollectionResponse.value = n.getCollectionOfObjectValues<ItemActivity>(createItemActivityFromDiscriminatorValue); },
    }
}
