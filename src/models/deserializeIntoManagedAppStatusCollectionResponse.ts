import {createManagedAppStatusFromDiscriminatorValue} from './createManagedAppStatusFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedAppStatus} from './managedAppStatus';
import {ManagedAppStatusCollectionResponse} from './managedAppStatusCollectionResponse';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatusCollectionResponse(managedAppStatusCollectionResponse: ManagedAppStatusCollectionResponse | undefined = {} as ManagedAppStatusCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppStatusCollectionResponse),
        "value": n => { managedAppStatusCollectionResponse.value = n.getCollectionOfObjectValues<ManagedAppStatus>(createManagedAppStatusFromDiscriminatorValue); },
    }
}
