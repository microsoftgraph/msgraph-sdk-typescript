import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeStore} from './serializeStore';
import type {Store} from './store';
import type {StoreCollectionResponse} from './storeCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStoreCollectionResponse(writer: SerializationWriter, storeCollectionResponse: StoreCollectionResponse | undefined = {} as StoreCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, storeCollectionResponse)
        writer.writeCollectionOfObjectValues<Store>("value", storeCollectionResponse.value, serializeStore);
}
