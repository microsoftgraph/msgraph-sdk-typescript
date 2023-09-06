import { deserializeIntoWin32LobApp } from './deserializeIntoWin32LobApp';
import { type Win32LobApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWin32LobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobApp;
}
