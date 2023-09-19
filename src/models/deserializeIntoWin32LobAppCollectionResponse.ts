import { createWin32LobAppFromDiscriminatorValue } from './createWin32LobAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWin32LobApp } from './serializeWin32LobApp';
import { type Win32LobApp } from './win32LobApp';
import { type Win32LobAppCollectionResponse } from './win32LobAppCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppCollectionResponse(win32LobAppCollectionResponse: Win32LobAppCollectionResponse | undefined = {} as Win32LobAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(win32LobAppCollectionResponse),
        "value": n => { win32LobAppCollectionResponse.value = n.getCollectionOfObjectValues<Win32LobApp>(createWin32LobAppFromDiscriminatorValue); },
    }
}
