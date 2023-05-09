import {deserializeIntoWin32LobApp} from './deserializeIntoWin32LobApp';
import {Win32LobApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobApp;
}
