import { deserializeIntoWin32LobAppCollectionResponse } from './deserializeIntoWin32LobAppCollectionResponse';
import { type Win32LobAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWin32LobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppCollectionResponse;
}
