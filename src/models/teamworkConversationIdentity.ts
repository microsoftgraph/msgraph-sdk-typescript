import {Identity} from './index';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkConversationIdentity extends Identity implements Parsable {
    /** Type of conversation. Possible values are: team, channel, chat, and unknownFutureValue.  */
    private _conversationIdentityType?: TeamworkConversationIdentityType | undefined;
    /**
     * Instantiates a new teamworkConversationIdentity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversationIdentityType property value. Type of conversation. Possible values are: team, channel, chat, and unknownFutureValue.
     * @returns a teamworkConversationIdentityType
     */
    public get conversationIdentityType() {
        return this._conversationIdentityType;
    };
    /**
     * Sets the conversationIdentityType property value. Type of conversation. Possible values are: team, channel, chat, and unknownFutureValue.
     * @param value Value to set for the conversationIdentityType property.
     */
    public set conversationIdentityType(value: TeamworkConversationIdentityType | undefined) {
        this._conversationIdentityType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "conversationIdentityType": (o, n) => { (o as unknown as TeamworkConversationIdentity).conversationIdentityType = n.getEnumValue<TeamworkConversationIdentityType>(TeamworkConversationIdentityType); },
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
