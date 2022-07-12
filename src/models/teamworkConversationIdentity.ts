import {AdminMember1, Identity} from './index';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkConversationIdentity extends Identity implements Parsable {
    /** Type of conversation. Possible values are: team, channel, and chat. */
    private _conversationIdentityType?: TeamworkConversationIdentityType | AdminMember1 | undefined;
    /**
     * Instantiates a new TeamworkConversationIdentity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversationIdentityType property value. Type of conversation. Possible values are: team, channel, and chat.
     * @returns a admin
     */
    public get conversationIdentityType() {
        return this._conversationIdentityType;
    };
    /**
     * Sets the conversationIdentityType property value. Type of conversation. Possible values are: team, channel, and chat.
     * @param value Value to set for the conversationIdentityType property.
     */
    public set conversationIdentityType(value: TeamworkConversationIdentityType | AdminMember1 | undefined) {
        this._conversationIdentityType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conversationIdentityType": n => { this.conversationIdentityType = n.getObjectValue<TeamworkConversationIdentityType>(createTeamworkConversationIdentityTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamworkConversationIdentityType>("conversationIdentityType", this.conversationIdentityType);
    };
}
