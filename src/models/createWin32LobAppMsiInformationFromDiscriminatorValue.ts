import {Win32LobAppMsiInformationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppMsiInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppMsiInformationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppMsiInformationImpl();
}
