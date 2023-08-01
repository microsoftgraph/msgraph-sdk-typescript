import type {ManagedAppStatus} from './managedAppStatus';
import type {ManagedAppStatusCollectionResponse} from './managedAppStatusCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppStatus} from './serializeManagedAppStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatusCollectionResponse(writer: SerializationWriter, managedAppStatusCollectionResponse: ManagedAppStatusCollectionResponse | undefined = {} as ManagedAppStatusCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAppStatusCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAppStatus>("value", managedAppStatusCollectionResponse.value, serializeManagedAppStatus);
}
