import { type AndroidLobApp } from './androidLobApp';
import { type AndroidLobAppCollectionResponse } from './androidLobAppCollectionResponse';
import { serializeAndroidLobApp } from './serializeAndroidLobApp';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndroidLobAppCollectionResponse(writer: SerializationWriter, androidLobAppCollectionResponse: AndroidLobAppCollectionResponse | undefined = {} as AndroidLobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidLobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<AndroidLobApp>("value", androidLobAppCollectionResponse.value, serializeAndroidLobApp);
}
