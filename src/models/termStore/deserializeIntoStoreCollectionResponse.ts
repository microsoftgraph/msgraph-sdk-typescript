import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createStoreFromDiscriminatorValue } from './createStoreFromDiscriminatorValue';
import { serializeStore } from './serializeStore';
import { type Store } from './store';
import { type StoreCollectionResponse } from './storeCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStoreCollectionResponse(storeCollectionResponse: StoreCollectionResponse | undefined = {} as StoreCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(storeCollectionResponse),
        "value": n => { storeCollectionResponse.value = n.getCollectionOfObjectValues<Store>(createStoreFromDiscriminatorValue); },
    }
}
