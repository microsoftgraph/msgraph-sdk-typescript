import { LobbyBypassScope } from './lobbyBypassScope';
import { type LobbyBypassSettings } from './lobbyBypassSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLobbyBypassSettings(writer: SerializationWriter, lobbyBypassSettings: LobbyBypassSettings | undefined = {} as LobbyBypassSettings) : void {
        writer.writeBooleanValue("isDialInBypassEnabled", lobbyBypassSettings.isDialInBypassEnabled);
        writer.writeStringValue("@odata.type", lobbyBypassSettings.odataType);
        writer.writeEnumValue<LobbyBypassScope>("scope", lobbyBypassSettings.scope);
        writer.writeAdditionalData(lobbyBypassSettings.additionalData);
}
