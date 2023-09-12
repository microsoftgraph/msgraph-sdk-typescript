import { LobbyBypassScope } from './lobbyBypassScope';
import { type LobbyBypassSettings } from './lobbyBypassSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLobbyBypassSettings(lobbyBypassSettings: LobbyBypassSettings | undefined = {} as LobbyBypassSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "isDialInBypassEnabled": n => { lobbyBypassSettings.isDialInBypassEnabled = n.getBooleanValue(); },
        "@odata.type": n => { lobbyBypassSettings.odataType = n.getStringValue(); },
        "scope": n => { lobbyBypassSettings.scope = n.getEnumValue<LobbyBypassScope>(LobbyBypassScope); },
    }
}
