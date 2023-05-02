import {LobbyBypassScope} from './lobbyBypassScope';
import {LobbyBypassSettings} from './lobbyBypassSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLobbyBypassSettings(writer: SerializationWriter, lobbyBypassSettings: LobbyBypassSettings | undefined = {} as LobbyBypassSettings) : void {
        writer.writeBooleanValue("isDialInBypassEnabled", lobbyBypassSettings.isDialInBypassEnabled);
        writer.writeStringValue("@odata.type", lobbyBypassSettings.odataType);
        writer.writeEnumValue<LobbyBypassScope>("scope", lobbyBypassSettings.scope);
        writer.writeAdditionalData(lobbyBypassSettings.additionalData);
}
