import {MessageImpl} from '../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../../../models/message';
import {ReplyPostRequestBody} from './replyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reply method. */
export class ReplyPostRequestBodyImpl implements ReplyPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The Comment property */
    private _comment?: string | undefined;
    /** The Message property */
    private _message?: Message | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the comment property value. The Comment property
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The Comment property
     * @param value Value to set for the Comment property.
     */
    public set comment(value: string | undefined) {
        if(value) {
            this._comment = value;
        }
    };
    /**
     * Instantiates a new replyPostRequestBody and sets the default values.
     * @param replyPostRequestBodyParameterValue 
     */
    public constructor(replyPostRequestBodyParameterValue?: ReplyPostRequestBody | undefined) {
        this._additionalData = replyPostRequestBodyParameterValue?.additionalData ? replyPostRequestBodyParameterValue?.additionalData! : {};
        this._comment = replyPostRequestBodyParameterValue?.comment;
        this._message = replyPostRequestBodyParameterValue?.message;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "message": n => { this.message = n.getObjectValue<MessageImpl>(createMessageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the message property value. The Message property
     * @returns a MessageInterface
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The Message property
     * @param value Value to set for the Message property.
     */
    public set message(value: Message | undefined) {
        if(value) {
            this._message = value instanceof MessageImpl? value : new MessageImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
            writer.writeStringValue("comment", this.comment);
        }
        if(this.message){
            writer.writeObjectValue<MessageImpl>("message", (!this.message || this.message instanceof MessageImpl? this.message : new MessageImpl(this.message)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
