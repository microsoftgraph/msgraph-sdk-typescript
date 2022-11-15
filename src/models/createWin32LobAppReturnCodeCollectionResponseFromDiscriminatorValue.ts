import {Win32LobAppReturnCodeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppReturnCodeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppReturnCodeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppReturnCodeCollectionResponse();
}
