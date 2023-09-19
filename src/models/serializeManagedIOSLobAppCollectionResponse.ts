import { type ManagedIOSLobApp } from './managedIOSLobApp';
import { type ManagedIOSLobAppCollectionResponse } from './managedIOSLobAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedIOSLobApp } from './serializeManagedIOSLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedIOSLobAppCollectionResponse(writer: SerializationWriter, managedIOSLobAppCollectionResponse: ManagedIOSLobAppCollectionResponse | undefined = {} as ManagedIOSLobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedIOSLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedIOSLobApp>("value", managedIOSLobAppCollectionResponse.value, serializeManagedIOSLobApp);
}
