import {createManagedAppRegistrationFromDiscriminatorValue} from './createManagedAppRegistrationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ManagedAppRegistration} from './managedAppRegistration';
import {ManagedAppRegistrationCollectionResponse} from './managedAppRegistrationCollectionResponse';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppRegistrationCollectionResponse(managedAppRegistrationCollectionResponse: ManagedAppRegistrationCollectionResponse | undefined = {} as ManagedAppRegistrationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppRegistrationCollectionResponse),
        "value": n => { managedAppRegistrationCollectionResponse.value = n.getCollectionOfObjectValues<ManagedAppRegistration>(createManagedAppRegistrationFromDiscriminatorValue); },
    }
}
