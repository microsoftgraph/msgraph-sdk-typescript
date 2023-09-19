import { type AndroidLobApp } from './androidLobApp';
import { type AndroidLobAppCollectionResponse } from './androidLobAppCollectionResponse';
import { createAndroidLobAppFromDiscriminatorValue } from './createAndroidLobAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAndroidLobApp } from './serializeAndroidLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidLobAppCollectionResponse(androidLobAppCollectionResponse: AndroidLobAppCollectionResponse | undefined = {} as AndroidLobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidLobAppCollectionResponse),
        "value": n => { androidLobAppCollectionResponse.value = n.getCollectionOfObjectValues<AndroidLobApp>(createAndroidLobAppFromDiscriminatorValue); },
    }
}
