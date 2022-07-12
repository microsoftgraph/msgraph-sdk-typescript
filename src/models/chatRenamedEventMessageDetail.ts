import {AdminMember1, EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatRenamedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** The updated name of the chat. */
    private _chatDisplayName?: string | undefined;
    /** Unique identifier of the chat. */
    private _chatId?: string | undefined;
    /** Initiator of the event. */
    private _initiator?: IdentitySet | AdminMember1 | undefined;
    /**
     * Gets the chatDisplayName property value. The updated name of the chat.
     * @returns a string
     */
    public get chatDisplayName() {
        return this._chatDisplayName;
    };
    /**
     * Sets the chatDisplayName property value. The updated name of the chat.
     * @param value Value to set for the chatDisplayName property.
     */
    public set chatDisplayName(value: string | undefined) {
        this._chatDisplayName = value;
    };
    /**
     * Gets the chatId property value. Unique identifier of the chat.
     * @returns a string
     */
    public get chatId() {
        return this._chatId;
    };
    /**
     * Sets the chatId property value. Unique identifier of the chat.
     * @param value Value to set for the chatId property.
     */
    public set chatId(value: string | undefined) {
        this._chatId = value;
    };
    /**
     * Instantiates a new ChatRenamedEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "chatDisplayName": n => { this.chatDisplayName = n.getStringValue(); },
            "chatId": n => { this.chatId = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a admin
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | AdminMember1 | undefined) {
        this._initiator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("chatDisplayName", this.chatDisplayName);
        writer.writeStringValue("chatId", this.chatId);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
    };
}
