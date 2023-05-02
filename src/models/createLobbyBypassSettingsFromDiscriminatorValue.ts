import {deserializeIntoLobbyBypassSettings} from './deserializeIntoLobbyBypassSettings';
import {LobbyBypassSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLobbyBypassSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLobbyBypassSettings;
}
