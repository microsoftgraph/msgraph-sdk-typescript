import { createMacOSLobAppFromDiscriminatorValue } from './createMacOSLobAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type MacOSLobApp } from './macOSLobApp';
import { type MacOSLobAppCollectionResponse } from './macOSLobAppCollectionResponse';
import { serializeMacOSLobApp } from './serializeMacOSLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSLobAppCollectionResponse(macOSLobAppCollectionResponse: MacOSLobAppCollectionResponse | undefined = {} as MacOSLobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSLobAppCollectionResponse),
        "value": n => { macOSLobAppCollectionResponse.value = n.getCollectionOfObjectValues<MacOSLobApp>(createMacOSLobAppFromDiscriminatorValue); },
    }
}
