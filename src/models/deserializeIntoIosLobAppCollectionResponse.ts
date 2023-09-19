import { createIosLobAppFromDiscriminatorValue } from './createIosLobAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type IosLobApp } from './iosLobApp';
import { type IosLobAppCollectionResponse } from './iosLobAppCollectionResponse';
import { serializeIosLobApp } from './serializeIosLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosLobAppCollectionResponse(iosLobAppCollectionResponse: IosLobAppCollectionResponse | undefined = {} as IosLobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosLobAppCollectionResponse),
        "value": n => { iosLobAppCollectionResponse.value = n.getCollectionOfObjectValues<IosLobApp>(createIosLobAppFromDiscriminatorValue); },
    }
}
