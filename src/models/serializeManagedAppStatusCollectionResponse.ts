import {ManagedAppStatus} from './managedAppStatus';
import {ManagedAppStatusCollectionResponse} from './managedAppStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatusCollectionResponse(managedAppStatusCollectionResponse: ManagedAppStatusCollectionResponse | undefined = {} as ManagedAppStatusCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAppStatus>("value", managedAppStatusCollectionResponse.value, serializeManagedAppStatus);
}
