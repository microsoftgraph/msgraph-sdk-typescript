import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createStoreFromDiscriminatorValue} from './createStoreFromDiscriminatorValue';
import {serializeStore} from './serializeStore';
import {Store} from './store';
import {StoreCollectionResponse} from './storeCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStoreCollectionResponse(storeCollectionResponse: StoreCollectionResponse | undefined = {} as StoreCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(storeCollectionResponse),
        "value": n => { storeCollectionResponse.value = n.getCollectionOfObjectValues<Store>(createStoreFromDiscriminatorValue); },
    }
}
