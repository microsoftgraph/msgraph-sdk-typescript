import {ChatMessageType} from './chatMessageType';
import {createChatMessageFromIdentitySetFromDiscriminatorValue} from './createChatMessageFromIdentitySetFromDiscriminatorValue';
import {createEventMessageDetailFromDiscriminatorValue} from './createEventMessageDetailFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {ChatMessageFromIdentitySet, Entity, EventMessageDetail, ItemBody} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageInfo extends Entity implements Parsable {
    /** Body of the chatMessage. This will still contain markers for @mentions and attachments even though the object does not return @mentions and attachments. */
    private _body?: ItemBody | undefined;
    /** Date time object representing the time at which message was created. */
    private _createdDateTime?: Date | undefined;
    /** Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, members were added, and so on. For event messages, the messageType property will be set to systemEventMessage. */
    private _eventDetail?: EventMessageDetail | undefined;
    /** Information about the sender of the message. */
    private _from?: ChatMessageFromIdentitySet | undefined;
    /** If set to true, the original message has been deleted. */
    private _isDeleted?: boolean | undefined;
    private _messageType?: ChatMessageType | undefined;
    /**
     * Gets the body property value. Body of the chatMessage. This will still contain markers for @mentions and attachments even though the object does not return @mentions and attachments.
     * @returns a itemBody
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. Body of the chatMessage. This will still contain markers for @mentions and attachments even though the object does not return @mentions and attachments.
     * @param value Value to set for the body property.
     */
    public set body(value: ItemBody | undefined) {
        this._body = value;
    };
    /**
     * Instantiates a new chatMessageInfo and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Date time object representing the time at which message was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date time object representing the time at which message was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the eventDetail property value. Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, members were added, and so on. For event messages, the messageType property will be set to systemEventMessage.
     * @returns a eventMessageDetail
     */
    public get eventDetail() {
        return this._eventDetail;
    };
    /**
     * Sets the eventDetail property value. Read-only.  If present, represents details of an event that happened in a chat, a channel, or a team, for example, members were added, and so on. For event messages, the messageType property will be set to systemEventMessage.
     * @param value Value to set for the eventDetail property.
     */
    public set eventDetail(value: EventMessageDetail | undefined) {
        this._eventDetail = value;
    };
    /**
     * Gets the from property value. Information about the sender of the message.
     * @returns a chatMessageFromIdentitySet
     */
    public get from() {
        return this._from;
    };
    /**
     * Sets the from property value. Information about the sender of the message.
     * @param value Value to set for the from property.
     */
    public set from(value: ChatMessageFromIdentitySet | undefined) {
        this._from = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "body": n => { this.body = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "eventDetail": n => { this.eventDetail = n.getObjectValue<EventMessageDetail>(createEventMessageDetailFromDiscriminatorValue); },
            "from": n => { this.from = n.getObjectValue<ChatMessageFromIdentitySet>(createChatMessageFromIdentitySetFromDiscriminatorValue); },
            "isDeleted": n => { this.isDeleted = n.getBooleanValue(); },
            "messageType": n => { this.messageType = n.getEnumValue<ChatMessageType>(ChatMessageType); },
        };
    };
    /**
     * Gets the isDeleted property value. If set to true, the original message has been deleted.
     * @returns a boolean
     */
    public get isDeleted() {
        return this._isDeleted;
    };
    /**
     * Sets the isDeleted property value. If set to true, the original message has been deleted.
     * @param value Value to set for the isDeleted property.
     */
    public set isDeleted(value: boolean | undefined) {
        this._isDeleted = value;
    };
    /**
     * Gets the messageType property value. 
     * @returns a chatMessageType
     */
    public get messageType() {
        return this._messageType;
    };
    /**
     * Sets the messageType property value. 
     * @param value Value to set for the messageType property.
     */
    public set messageType(value: ChatMessageType | undefined) {
        this._messageType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemBody>("body", this.body);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<EventMessageDetail>("eventDetail", this.eventDetail);
        writer.writeObjectValue<ChatMessageFromIdentitySet>("from", this.from);
        writer.writeBooleanValue("isDeleted", this.isDeleted);
        writer.writeEnumValue<ChatMessageType>("messageType", this.messageType);
    };
}
