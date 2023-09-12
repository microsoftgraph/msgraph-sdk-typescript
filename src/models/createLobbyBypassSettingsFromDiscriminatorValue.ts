import { deserializeIntoLobbyBypassSettings } from './deserializeIntoLobbyBypassSettings';
import { type LobbyBypassSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLobbyBypassSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLobbyBypassSettings;
}
