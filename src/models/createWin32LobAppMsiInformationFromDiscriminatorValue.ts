import { deserializeIntoWin32LobAppMsiInformation } from './deserializeIntoWin32LobAppMsiInformation';
import { type Win32LobAppMsiInformation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWin32LobAppMsiInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWin32LobAppMsiInformation;
}
