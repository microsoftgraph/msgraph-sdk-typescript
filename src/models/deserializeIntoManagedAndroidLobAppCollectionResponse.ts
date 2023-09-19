import { createManagedAndroidLobAppFromDiscriminatorValue } from './createManagedAndroidLobAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedAndroidLobApp } from './managedAndroidLobApp';
import { type ManagedAndroidLobAppCollectionResponse } from './managedAndroidLobAppCollectionResponse';
import { serializeManagedAndroidLobApp } from './serializeManagedAndroidLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAndroidLobAppCollectionResponse(managedAndroidLobAppCollectionResponse: ManagedAndroidLobAppCollectionResponse | undefined = {} as ManagedAndroidLobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAndroidLobAppCollectionResponse),
        "value": n => { managedAndroidLobAppCollectionResponse.value = n.getCollectionOfObjectValues<ManagedAndroidLobApp>(createManagedAndroidLobAppFromDiscriminatorValue); },
    }
}
