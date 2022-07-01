import {ChatMessageMention} from './chatMessageMention';
import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {createChatMessageMentionedIdentitySetFromDiscriminatorValue} from './createChatMessageMentionedIdentitySetFromDiscriminatorValue';
import {ChatMessageMentionedIdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageMentionImpl implements ChatMessageMention {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body. */
    private _id?: number | undefined;
    /** The entity (user, application, team, or channel) that was @mentioned. */
    private _mentioned?: ChatMessageMentionedIdentitySet | undefined;
    /** String used to represent the mention. For example, a user's display name, a team name. */
    private _mentionText?: string | undefined;
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
     * Instantiates a new chatMessageMention and sets the default values.
     * @param chatMessageMentionParameterValue 
     */
    public constructor(chatMessageMentionParameterValue?: ChatMessageMention | undefined) {
        this._additionalData = chatMessageMentionParameterValue?.additionalData ? chatMessageMentionParameterValue?.additionalData! : {};
        this._id = chatMessageMentionParameterValue?.id;
        this._mentioned = chatMessageMentionParameterValue?.mentioned;
        this._mentionText = chatMessageMentionParameterValue?.mentionText;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getNumberValue(); },
            "mentioned": n => { this.mentioned = n.getObjectValue<ChatMessageMentionedIdentitySetImpl>(createChatMessageMentionedIdentitySetFromDiscriminatorValue); },
            "mentionText": n => { this.mentionText = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.
     * @returns a integer
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.
     * @param value Value to set for the id property.
     */
    public set id(value: number | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Gets the mentioned property value. The entity (user, application, team, or channel) that was @mentioned.
     * @returns a ChatMessageMentionedIdentitySetInterface
     */
    public get mentioned() {
        return this._mentioned;
    };
    /**
     * Sets the mentioned property value. The entity (user, application, team, or channel) that was @mentioned.
     * @param value Value to set for the mentioned property.
     */
    public set mentioned(value: ChatMessageMentionedIdentitySet | undefined) {
        if(value) {
            this._mentioned = value instanceof ChatMessageMentionedIdentitySetImpl? value : new ChatMessageMentionedIdentitySetImpl(value);
        }
    };
    /**
     * Gets the mentionText property value. String used to represent the mention. For example, a user's display name, a team name.
     * @returns a string
     */
    public get mentionText() {
        return this._mentionText;
    };
    /**
     * Sets the mentionText property value. String used to represent the mention. For example, a user's display name, a team name.
     * @param value Value to set for the mentionText property.
     */
    public set mentionText(value: string | undefined) {
        if(value) {
            this._mentionText = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
            writer.writeNumberValue("id", this.id);
        }
        if(this.mentioned){
            writer.writeObjectValue<ChatMessageMentionedIdentitySetImpl>("mentioned", (!this.mentioned || this.mentioned instanceof ChatMessageMentionedIdentitySetImpl? this.mentioned : new ChatMessageMentionedIdentitySetImpl(this.mentioned)));
        }
        if(this.mentionText){
            writer.writeStringValue("mentionText", this.mentionText);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
