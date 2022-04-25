import {Message, Recipient} from '../../../../../../../../models/';
import {createMessageFromDiscriminatorValue} from '../../../../../../../../models/createMessageFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from '../../../../../../../../models/createRecipientFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the createForward method.  */
export class CreateForwardRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The Comment property  */
    private _comment?: string | undefined;
    /** The Message property  */
    private _message?: Message | undefined;
    /** The ToRecipients property  */
    private _toRecipients?: Recipient[] | undefined;
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
        this._comment = value;
    };
    /**
     * Instantiates a new createForwardRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "message": n => { this.message = n.getObjectValue<Message>(createMessageFromDiscriminatorValue); },
            "toRecipients": n => { this.toRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the message property value. The Message property
     * @returns a message
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The Message property
     * @param value Value to set for the Message property.
     */
    public set message(value: Message | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("comment", this.comment);
        writer.writeObjectValue<Message>("message", this.message);
        writer.writeCollectionOfObjectValues<Recipient>("toRecipients", this.toRecipients);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the toRecipients property value. The ToRecipients property
     * @returns a recipient
     */
    public get toRecipients() {
        return this._toRecipients;
    };
    /**
     * Sets the toRecipients property value. The ToRecipients property
     * @param value Value to set for the ToRecipients property.
     */
    public set toRecipients(value: Recipient[] | undefined) {
        this._toRecipients = value;
    };
}
