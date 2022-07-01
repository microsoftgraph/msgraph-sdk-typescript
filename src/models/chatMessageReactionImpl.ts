import {ChatMessageReaction} from './chatMessageReaction';
import {ChatMessageReactionIdentitySet} from './chatMessageReactionIdentitySet';
import {createChatMessageReactionIdentitySetFromDiscriminatorValue} from './createChatMessageReactionIdentitySetFromDiscriminatorValue';
import {ChatMessageReactionIdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageReactionImpl implements ChatMessageReaction {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** Supported values are like, angry, sad, laugh, heart, surprised. */
    private _reactionType?: string | undefined;
    /** The user property */
    private _user?: ChatMessageReactionIdentitySet | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new chatMessageReaction and sets the default values.
     * @param chatMessageReactionParameterValue 
     */
    public constructor(chatMessageReactionParameterValue?: ChatMessageReaction | undefined) {
        this._additionalData = chatMessageReactionParameterValue?.additionalData ? chatMessageReactionParameterValue?.additionalData! : {};
        this._createdDateTime = chatMessageReactionParameterValue?.createdDateTime;
        this._reactionType = chatMessageReactionParameterValue?.reactionType;
        this._user = chatMessageReactionParameterValue?.user;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "reactionType": n => { this.reactionType = n.getStringValue(); },
            "user": n => { this.user = n.getObjectValue<ChatMessageReactionIdentitySetImpl>(createChatMessageReactionIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the reactionType property value. Supported values are like, angry, sad, laugh, heart, surprised.
     * @returns a string
     */
    public get reactionType() {
        return this._reactionType;
    };
    /**
     * Sets the reactionType property value. Supported values are like, angry, sad, laugh, heart, surprised.
     * @param value Value to set for the reactionType property.
     */
    public set reactionType(value: string | undefined) {
        if(value) {
            this._reactionType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.reactionType){
            writer.writeStringValue("reactionType", this.reactionType);
        }
        if(this.user){
            writer.writeObjectValue<ChatMessageReactionIdentitySetImpl>("user", (this.user instanceof ChatMessageReactionIdentitySetImpl? this.user as ChatMessageReactionIdentitySetImpl: new ChatMessageReactionIdentitySetImpl(this.user)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. The user property
     * @returns a ChatMessageReactionIdentitySetInterface
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. The user property
     * @param value Value to set for the user property.
     */
    public set user(value: ChatMessageReactionIdentitySet | undefined) {
        if(value) {
            this._user = value instanceof ChatMessageReactionIdentitySetImpl? value as ChatMessageReactionIdentitySetImpl: new ChatMessageReactionIdentitySetImpl(value);
        }
    };
}
