import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ManagedMobileApp} from './managedMobileApp';
import type {ManagedMobileAppCollectionResponse} from './managedMobileAppCollectionResponse';
import {serializeManagedMobileApp} from './serializeManagedMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileAppCollectionResponse(managedMobileAppCollectionResponse: ManagedMobileAppCollectionResponse | undefined = {} as ManagedMobileAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedMobileAppCollectionResponse),
        "value": n => { managedMobileAppCollectionResponse.value = n.getCollectionOfObjectValues<ManagedMobileApp>(createManagedMobileAppFromDiscriminatorValue); },
    }
}
