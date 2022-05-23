import {TeamMessagingSettings} from './teamMessagingSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamMessagingSettingsImpl implements AdditionalDataHolder, Parsable, TeamMessagingSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If set to true, @channel mentions are allowed. */
    public allowChannelMentions?: boolean | undefined;
    /** If set to true, owners can delete any message. */
    public allowOwnerDeleteMessages?: boolean | undefined;
    /** If set to true, @team mentions are allowed. */
    public allowTeamMentions?: boolean | undefined;
    /** If set to true, users can delete their messages. */
    public allowUserDeleteMessages?: boolean | undefined;
    /** If set to true, users can edit their messages. */
    public allowUserEditMessages?: boolean | undefined;
    /**
     * Instantiates a new teamMessagingSettings and sets the default values.
     * @param teamMessagingSettingsParameterValue 
     */
    public constructor(teamMessagingSettingsParameterValue?: TeamMessagingSettings | undefined) {
        this.additionalData = teamMessagingSettingsParameterValue?.additionalData ? teamMessagingSettingsParameterValue?.additionalData! : {}
        this.allowChannelMentions = teamMessagingSettingsParameterValue?.allowChannelMentions ;
        this.allowOwnerDeleteMessages = teamMessagingSettingsParameterValue?.allowOwnerDeleteMessages ;
        this.allowTeamMentions = teamMessagingSettingsParameterValue?.allowTeamMentions ;
        this.allowUserDeleteMessages = teamMessagingSettingsParameterValue?.allowUserDeleteMessages ;
        this.allowUserEditMessages = teamMessagingSettingsParameterValue?.allowUserEditMessages ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowChannelMentions": n => { this.allowChannelMentions = n.getBooleanValue(); },
            "allowOwnerDeleteMessages": n => { this.allowOwnerDeleteMessages = n.getBooleanValue(); },
            "allowTeamMentions": n => { this.allowTeamMentions = n.getBooleanValue(); },
            "allowUserDeleteMessages": n => { this.allowUserDeleteMessages = n.getBooleanValue(); },
            "allowUserEditMessages": n => { this.allowUserEditMessages = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowChannelMentions){
        writer.writeBooleanValue("allowChannelMentions", this.allowChannelMentions);
        }
        if(this.allowOwnerDeleteMessages){
        writer.writeBooleanValue("allowOwnerDeleteMessages", this.allowOwnerDeleteMessages);
        }
        if(this.allowTeamMentions){
        writer.writeBooleanValue("allowTeamMentions", this.allowTeamMentions);
        }
        if(this.allowUserDeleteMessages){
        writer.writeBooleanValue("allowUserDeleteMessages", this.allowUserDeleteMessages);
        }
        if(this.allowUserEditMessages){
        writer.writeBooleanValue("allowUserEditMessages", this.allowUserEditMessages);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
