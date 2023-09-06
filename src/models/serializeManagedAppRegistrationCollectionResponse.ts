import { type ManagedAppRegistration } from './managedAppRegistration';
import { type ManagedAppRegistrationCollectionResponse } from './managedAppRegistrationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedAppRegistration } from './serializeManagedAppRegistration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppRegistrationCollectionResponse(writer: SerializationWriter, managedAppRegistrationCollectionResponse: ManagedAppRegistrationCollectionResponse | undefined = {} as ManagedAppRegistrationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppRegistrationCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAppRegistration>("value", managedAppRegistrationCollectionResponse.value, serializeManagedAppRegistration);
}
