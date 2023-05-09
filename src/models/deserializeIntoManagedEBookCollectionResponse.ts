import {createManagedEBookFromDiscriminatorValue} from './createManagedEBookFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedEBook} from './managedEBook';
import {ManagedEBookCollectionResponse} from './managedEBookCollectionResponse';
import {serializeManagedEBook} from './serializeManagedEBook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedEBookCollectionResponse(managedEBookCollectionResponse: ManagedEBookCollectionResponse | undefined = {} as ManagedEBookCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedEBookCollectionResponse),
        "value": n => { managedEBookCollectionResponse.value = n.getCollectionOfObjectValues<ManagedEBook>(createManagedEBookFromDiscriminatorValue); },
    }
}
