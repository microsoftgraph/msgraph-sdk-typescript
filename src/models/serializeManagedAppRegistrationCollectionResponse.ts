import {ManagedAppRegistration} from './managedAppRegistration';
import {ManagedAppRegistrationCollectionResponse} from './managedAppRegistrationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppRegistration} from './serializeManagedAppRegistration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppRegistrationCollectionResponse(writer: SerializationWriter, managedAppRegistrationCollectionResponse: ManagedAppRegistrationCollectionResponse | undefined = {} as ManagedAppRegistrationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppRegistrationCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAppRegistration>("value", managedAppRegistrationCollectionResponse.value, serializeManagedAppRegistration);
}
