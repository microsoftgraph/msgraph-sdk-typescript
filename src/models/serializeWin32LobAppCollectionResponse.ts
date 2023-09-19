import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWin32LobApp } from './serializeWin32LobApp';
import { type Win32LobApp } from './win32LobApp';
import { type Win32LobAppCollectionResponse } from './win32LobAppCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWin32LobAppCollectionResponse(writer: SerializationWriter, win32LobAppCollectionResponse: Win32LobAppCollectionResponse | undefined = {} as Win32LobAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, win32LobAppCollectionResponse)
        writer.writeCollectionOfObjectValues<Win32LobApp>("value", win32LobAppCollectionResponse.value, serializeWin32LobApp);
}
