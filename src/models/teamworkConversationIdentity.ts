import {Identity} from './index';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class TeamworkConversationIdentity extends Identity implements Parsable {
    /** Type of conversation. Possible values are: team, channel, and chat. */
    private _conversationIdentityType?: TeamworkConversationIdentityType | undefined;
    /**
     * Instantiates a new teamworkConversationIdentity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversationIdentityType property value. Type of conversation. Possible values are: team, channel, and chat.
     * @returns a teamworkConversationIdentityType
     */
    public get conversationIdentityType() {
        return this._conversationIdentityType;
    };
    /**
     * Sets the conversationIdentityType property value. Type of conversation. Possible values are: team, channel, and chat.
     * @param value Value to set for the conversationIdentityType property.
     */
    public set conversationIdentityType(value: TeamworkConversationIdentityType | undefined) {
        this._conversationIdentityType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conversationIdentityType": n => { this.conversationIdentityType = n.getEnumValue<TeamworkConversationIdentityType>(TeamworkConversationIdentityType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<TeamworkConversationIdentityType>("conversationIdentityType", this.conversationIdentityType);
    };
}
