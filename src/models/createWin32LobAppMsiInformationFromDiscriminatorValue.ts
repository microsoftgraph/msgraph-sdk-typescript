import {Win32LobAppMsiInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWin32LobAppMsiInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Win32LobAppMsiInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Win32LobAppMsiInformation();
}
