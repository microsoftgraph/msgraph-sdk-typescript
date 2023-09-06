import { type ManagedMobileLobApp } from './managedMobileLobApp';
import { type ManagedMobileLobAppCollectionResponse } from './managedMobileLobAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeManagedMobileLobApp } from './serializeManagedMobileLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedMobileLobAppCollectionResponse(writer: SerializationWriter, managedMobileLobAppCollectionResponse: ManagedMobileLobAppCollectionResponse | undefined = {} as ManagedMobileLobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, managedMobileLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<ManagedMobileLobApp>("value", managedMobileLobAppCollectionResponse.value, serializeManagedMobileLobApp);
}
