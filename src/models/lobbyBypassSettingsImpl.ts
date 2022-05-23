import {LobbyBypassScope} from './lobbyBypassScope';
import {LobbyBypassSettings} from './lobbyBypassSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LobbyBypassSettingsImpl implements AdditionalDataHolder, LobbyBypassSettings, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies whether or not to always let dial-in callers bypass the lobby. Optional. */
    public isDialInBypassEnabled?: boolean | undefined;
    /** Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Optional. */
    public scope?: LobbyBypassScope | undefined;
    /**
     * Instantiates a new lobbyBypassSettings and sets the default values.
     * @param lobbyBypassSettingsParameterValue 
     */
    public constructor(lobbyBypassSettingsParameterValue?: LobbyBypassSettings | undefined) {
        this.additionalData = lobbyBypassSettingsParameterValue?.additionalData ? lobbyBypassSettingsParameterValue?.additionalData! : {}
        this.isDialInBypassEnabled = lobbyBypassSettingsParameterValue?.isDialInBypassEnabled ;
        this.scope = lobbyBypassSettingsParameterValue?.scope ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isDialInBypassEnabled": n => { this.isDialInBypassEnabled = n.getBooleanValue(); },
            "scope": n => { this.scope = n.getEnumValue<LobbyBypassScope>(LobbyBypassScope); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isDialInBypassEnabled){
        writer.writeBooleanValue("isDialInBypassEnabled", this.isDialInBypassEnabled);
        }
        if(this.scope){
        writer.writeEnumValue<LobbyBypassScope>("scope", this.scope);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
