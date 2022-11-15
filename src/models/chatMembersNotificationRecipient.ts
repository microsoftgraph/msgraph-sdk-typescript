import {TeamworkNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMembersNotificationRecipient extends TeamworkNotificationRecipient implements Parsable {
    /** The unique identifier for the chat whose members should receive the notifications. */
    private _chatId?: string | undefined;
    /**
     * Gets the chatId property value. The unique identifier for the chat whose members should receive the notifications.
     * @returns a string
     */
    public get chatId() {
        return this._chatId;
    };
    /**
     * Sets the chatId property value. The unique identifier for the chat whose members should receive the notifications.
     * @param value Value to set for the chatId property.
     */
    public set chatId(value: string | undefined) {
        this._chatId = value;
    };
    /**
     * Instantiates a new ChatMembersNotificationRecipient and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.chatMembersNotificationRecipient";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "chatId": n => { this.chatId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("chatId", this.chatId);
    };
}
