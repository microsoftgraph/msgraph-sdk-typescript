import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {Recipient} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitedUserMessageInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported. */
    private _ccRecipients?: Recipient[] | undefined;
    /** Customized message body you want to send if you don't want the default message. */
    private _customizedMessageBody?: string | undefined;
    /** The language you want to send the default message in. If the customizedMessageBody is specified, this property is ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default is en-US. */
    private _messageLanguage?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Gets the ccRecipients property value. Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported.
     * @returns a recipient
     */
    public get ccRecipients() {
        return this._ccRecipients;
    };
    /**
     * Sets the ccRecipients property value. Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported.
     * @param value Value to set for the ccRecipients property.
     */
    public set ccRecipients(value: Recipient[] | undefined) {
        this._ccRecipients = value;
    };
    /**
     * Instantiates a new invitedUserMessageInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the customizedMessageBody property value. Customized message body you want to send if you don't want the default message.
     * @returns a string
     */
    public get customizedMessageBody() {
        return this._customizedMessageBody;
    };
    /**
     * Sets the customizedMessageBody property value. Customized message body you want to send if you don't want the default message.
     * @param value Value to set for the customizedMessageBody property.
     */
    public set customizedMessageBody(value: string | undefined) {
        this._customizedMessageBody = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ccRecipients": n => { this.ccRecipients = n.getCollectionOfObjectValues<Recipient>(createRecipientFromDiscriminatorValue); },
            "customizedMessageBody": n => { this.customizedMessageBody = n.getStringValue(); },
            "messageLanguage": n => { this.messageLanguage = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the messageLanguage property value. The language you want to send the default message in. If the customizedMessageBody is specified, this property is ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default is en-US.
     * @returns a string
     */
    public get messageLanguage() {
        return this._messageLanguage;
    };
    /**
     * Sets the messageLanguage property value. The language you want to send the default message in. If the customizedMessageBody is specified, this property is ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default is en-US.
     * @param value Value to set for the messageLanguage property.
     */
    public set messageLanguage(value: string | undefined) {
        this._messageLanguage = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<Recipient>("ccRecipients", this.ccRecipients);
        writer.writeStringValue("customizedMessageBody", this.customizedMessageBody);
        writer.writeStringValue("messageLanguage", this.messageLanguage);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
