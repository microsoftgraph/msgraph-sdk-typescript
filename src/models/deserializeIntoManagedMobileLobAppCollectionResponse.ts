import { createManagedMobileLobAppFromDiscriminatorValue } from './createManagedMobileLobAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedMobileLobApp } from './managedMobileLobApp';
import { type ManagedMobileLobAppCollectionResponse } from './managedMobileLobAppCollectionResponse';
import { serializeManagedMobileLobApp } from './serializeManagedMobileLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileLobAppCollectionResponse(managedMobileLobAppCollectionResponse: ManagedMobileLobAppCollectionResponse | undefined = {} as ManagedMobileLobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedMobileLobAppCollectionResponse),
        "value": n => { managedMobileLobAppCollectionResponse.value = n.getCollectionOfObjectValues<ManagedMobileLobApp>(createManagedMobileLobAppFromDiscriminatorValue); },
    }
}
