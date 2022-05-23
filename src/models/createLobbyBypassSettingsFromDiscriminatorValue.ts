import {LobbyBypassSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLobbyBypassSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : LobbyBypassSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LobbyBypassSettingsImpl();
}
