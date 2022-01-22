import {Message} from '../../../../models/microsoft/graph/message';
import {Recipient} from '../../../../models/microsoft/graph/recipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ForwardRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _comment?: string | undefined;
    private _message?: Message | undefined;
    private _toRecipients?: Recipient[] | undefined;
    /**
     * Instantiates a new forwardRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the comment property value. 
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Gets the message property value. 
     * @returns a message
     */
    public get message() {
        return this._message;
    };
    /**
     * Gets the toRecipients property value. 
     * @returns a recipient
     */
    public get toRecipients() {
        return this._toRecipients;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["comment", (o, n) => { (o as unknown as ForwardRequestBody).comment = n.getStringValue(); }],
            ["message", (o, n) => { (o as unknown as ForwardRequestBody).message = n.getObjectValue<Message>(Message); }],
            ["toRecipients", (o, n) => { (o as unknown as ForwardRequestBody).toRecipients = n.getCollectionOfObjectValues<Recipient>(Recipient); }],
        ]);
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
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the comment property value. 
     * @param value Value to set for the Comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Sets the message property value. 
     * @param value Value to set for the Message property.
     */
    public set message(value: Message | undefined) {
        this._message = value;
    };
    /**
     * Sets the toRecipients property value. 
     * @param value Value to set for the ToRecipients property.
     */
    public set toRecipients(value: Recipient[] | undefined) {
        this._toRecipients = value;
    };
}
