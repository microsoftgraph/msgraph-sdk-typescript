import { createManagedIOSLobAppFromDiscriminatorValue } from './createManagedIOSLobAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedIOSLobApp } from './managedIOSLobApp';
import { type ManagedIOSLobAppCollectionResponse } from './managedIOSLobAppCollectionResponse';
import { serializeManagedIOSLobApp } from './serializeManagedIOSLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedIOSLobAppCollectionResponse(managedIOSLobAppCollectionResponse: ManagedIOSLobAppCollectionResponse | undefined = {} as ManagedIOSLobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedIOSLobAppCollectionResponse),
        "value": n => { managedIOSLobAppCollectionResponse.value = n.getCollectionOfObjectValues<ManagedIOSLobApp>(createManagedIOSLobAppFromDiscriminatorValue); },
    }
}
