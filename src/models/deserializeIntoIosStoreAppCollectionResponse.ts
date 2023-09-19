import { createIosStoreAppFromDiscriminatorValue } from './createIosStoreAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IosStoreApp } from './iosStoreApp';
import { type IosStoreAppCollectionResponse } from './iosStoreAppCollectionResponse';
import { serializeIosStoreApp } from './serializeIosStoreApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosStoreAppCollectionResponse(iosStoreAppCollectionResponse: IosStoreAppCollectionResponse | undefined = {} as IosStoreAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosStoreAppCollectionResponse),
        "value": n => { iosStoreAppCollectionResponse.value = n.getCollectionOfObjectValues<IosStoreApp>(createIosStoreAppFromDiscriminatorValue); },
    }
}
