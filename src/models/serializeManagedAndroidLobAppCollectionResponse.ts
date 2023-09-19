import { type ManagedAndroidLobApp } from './managedAndroidLobApp';
import { type ManagedAndroidLobAppCollectionResponse } from './managedAndroidLobAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedAndroidLobApp } from './serializeManagedAndroidLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidLobAppCollectionResponse(writer: SerializationWriter, managedAndroidLobAppCollectionResponse: ManagedAndroidLobAppCollectionResponse | undefined = {} as ManagedAndroidLobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedAndroidLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedAndroidLobApp>("value", managedAndroidLobAppCollectionResponse.value, serializeManagedAndroidLobApp);
}
