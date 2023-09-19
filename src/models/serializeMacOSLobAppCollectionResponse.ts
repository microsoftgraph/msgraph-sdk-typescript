import { type MacOSLobApp } from './macOSLobApp';
import { type MacOSLobAppCollectionResponse } from './macOSLobAppCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeMacOSLobApp } from './serializeMacOSLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSLobAppCollectionResponse(writer: SerializationWriter, macOSLobAppCollectionResponse: MacOSLobAppCollectionResponse | undefined = {} as MacOSLobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<MacOSLobApp>("value", macOSLobAppCollectionResponse.value, serializeMacOSLobApp);
}
