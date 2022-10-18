import {Win32LobAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppCollectionResponse();
}
