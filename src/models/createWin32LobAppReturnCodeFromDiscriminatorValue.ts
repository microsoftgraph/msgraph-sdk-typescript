import {deserializeIntoWin32LobAppReturnCode} from './deserializeIntoWin32LobAppReturnCode';
import {Win32LobAppReturnCode} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppReturnCodeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppReturnCode;
}
