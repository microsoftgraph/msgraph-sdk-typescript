import {MessageImpl} from '../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../models/createMessageFromDiscriminatorValue';
import {Message} from '../../../models/message';
import {SendMailPostRequestBody} from './sendMailPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sendMail method. */
export class SendMailPostRequestBodyImpl implements SendMailPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The Message property */
    private _message?: Message | undefined;
    /** The SaveToSentItems property */
    private _saveToSentItems?: boolean | undefined;
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
     * Instantiates a new sendMailPostRequestBody and sets the default values.
     * @param sendMailPostRequestBodyParameterValue 
     */
    public constructor(sendMailPostRequestBodyParameterValue?: SendMailPostRequestBody | undefined) {
        this._additionalData = sendMailPostRequestBodyParameterValue?.additionalData ? sendMailPostRequestBodyParameterValue?.additionalData! : {};
        this._message = sendMailPostRequestBodyParameterValue?.message;
        this._saveToSentItems = sendMailPostRequestBodyParameterValue?.saveToSentItems;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "message": n => { this.message = n.getObjectValue<MessageImpl>(createMessageFromDiscriminatorValue); },
            "saveToSentItems": n => { this.saveToSentItems = n.getBooleanValue(); },
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
     * Gets the saveToSentItems property value. The SaveToSentItems property
     * @returns a boolean
     */
    public get saveToSentItems() {
        return this._saveToSentItems;
    };
    /**
     * Sets the saveToSentItems property value. The SaveToSentItems property
     * @param value Value to set for the SaveToSentItems property.
     */
    public set saveToSentItems(value: boolean | undefined) {
        if(value) {
            this._saveToSentItems = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.message){
            writer.writeObjectValue<MessageImpl>("message", (!this.message || this.message instanceof MessageImpl? this.message : new MessageImpl(this.message)));
        }
        if(this.saveToSentItems){
            writer.writeBooleanValue("saveToSentItems", this.saveToSentItems);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
