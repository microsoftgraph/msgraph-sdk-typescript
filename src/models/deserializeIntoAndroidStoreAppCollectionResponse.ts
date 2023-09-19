import { type AndroidStoreApp } from './androidStoreApp';
import { type AndroidStoreAppCollectionResponse } from './androidStoreAppCollectionResponse';
import { createAndroidStoreAppFromDiscriminatorValue } from './createAndroidStoreAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAndroidStoreApp } from './serializeAndroidStoreApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidStoreAppCollectionResponse(androidStoreAppCollectionResponse: AndroidStoreAppCollectionResponse | undefined = {} as AndroidStoreAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidStoreAppCollectionResponse),
        "value": n => { androidStoreAppCollectionResponse.value = n.getCollectionOfObjectValues<AndroidStoreApp>(createAndroidStoreAppFromDiscriminatorValue); },
    }
}
