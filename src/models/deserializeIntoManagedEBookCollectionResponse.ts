import { createManagedEBookFromDiscriminatorValue } from './createManagedEBookFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ManagedEBook } from './managedEBook';
import { type ManagedEBookCollectionResponse } from './managedEBookCollectionResponse';
import { serializeManagedEBook } from './serializeManagedEBook';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBookCollectionResponse(managedEBookCollectionResponse: ManagedEBookCollectionResponse | undefined = {} as ManagedEBookCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedEBookCollectionResponse),
        "value": n => { managedEBookCollectionResponse.value = n.getCollectionOfObjectValues<ManagedEBook>(createManagedEBookFromDiscriminatorValue); },
    }
}
