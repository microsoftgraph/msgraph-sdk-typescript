import {LobbyBypassScope} from './lobbyBypassScope';
import {LobbyBypassSettings} from './lobbyBypassSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLobbyBypassSettings(lobbyBypassSettings: LobbyBypassSettings | undefined = {} as LobbyBypassSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "isDialInBypassEnabled": n => { lobbyBypassSettings.isDialInBypassEnabled = n.getBooleanValue(); },
        "@odata.type": n => { lobbyBypassSettings.odataType = n.getStringValue(); },
        "scope": n => { lobbyBypassSettings.scope = n.getEnumValue<LobbyBypassScope>(LobbyBypassScope); },
    }
}
