import {TeamGuestSettings} from './teamGuestSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamGuestSettingsImpl implements AdditionalDataHolder, Parsable, TeamGuestSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If set to true, guests can add and update channels. */
    public allowCreateUpdateChannels?: boolean | undefined;
    /** If set to true, guests can delete channels. */
    public allowDeleteChannels?: boolean | undefined;
    /**
     * Instantiates a new teamGuestSettings and sets the default values.
     * @param teamGuestSettingsParameterValue 
     */
    public constructor(teamGuestSettingsParameterValue?: TeamGuestSettings | undefined) {
        this.additionalData = teamGuestSettingsParameterValue?.additionalData ? teamGuestSettingsParameterValue?.additionalData! : {}
        this.allowCreateUpdateChannels = teamGuestSettingsParameterValue?.allowCreateUpdateChannels ;
        this.allowDeleteChannels = teamGuestSettingsParameterValue?.allowDeleteChannels ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowCreateUpdateChannels": n => { this.allowCreateUpdateChannels = n.getBooleanValue(); },
            "allowDeleteChannels": n => { this.allowDeleteChannels = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowCreateUpdateChannels){
        writer.writeBooleanValue("allowCreateUpdateChannels", this.allowCreateUpdateChannels);
        }
        if(this.allowDeleteChannels){
        writer.writeBooleanValue("allowDeleteChannels", this.allowDeleteChannels);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
