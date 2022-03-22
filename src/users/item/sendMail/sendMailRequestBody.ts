import {Message} from '../../../models/microsoft/graph/';
import {createMessageFromDiscriminatorValue} from '../../../models/microsoft/graph/createMessageFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the sendMail method.  */
export class SendMailRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    private _message?: Message | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new sendMailRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "message": (o, n) => { (o as unknown as SendMailRequestBody).message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
            "saveToSentItems": (o, n) => { (o as unknown as SendMailRequestBody).saveToSentItems = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the message property value. 
     * @returns a message
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. 
     * @param value Value to set for the Message property.
     */
    public set message(value: Message | undefined) {
        this._message = value;
    };
    /**
     * Gets the saveToSentItems property value. 
     * @returns a boolean
     */
    public get saveToSentItems() {
        return this._saveToSentItems;
    };
    /**
     * Sets the saveToSentItems property value. 
     * @param value Value to set for the SaveToSentItems property.
     */
    public set saveToSentItems(value: boolean | undefined) {
        this._saveToSentItems = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Message>("message", this.message);
        writer.writeBooleanValue("saveToSentItems", this.saveToSentItems);
        writer.writeAdditionalData(this.additionalData);
    };
}
