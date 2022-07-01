import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {RecipientImpl} from './index';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {Recipient} from './recipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitedUserMessageInfoImpl implements InvitedUserMessageInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported. */
    private _ccRecipients?: Recipient[] | undefined;
    /** Customized message body you want to send if you don't want the default message. */
    private _customizedMessageBody?: string | undefined;
    /** The language you want to send the default message in. If the customizedMessageBody is specified, this property is ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default is en-US. */
    private _messageLanguage?: string | undefined;
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
     * Gets the ccRecipients property value. Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported.
     * @returns a RecipientInterface
     */
    public get ccRecipients() {
        return this._ccRecipients;
    };
    /**
     * Sets the ccRecipients property value. Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported.
     * @param value Value to set for the ccRecipients property.
     */
    public set ccRecipients(value: Recipient[] | undefined) {
        if(value) {
            const ccRecipientsArrValue: RecipientImpl[] = [];
            this.ccRecipients?.forEach(element => {
                ccRecipientsArrValue.push((element instanceof RecipientImpl? element as RecipientImpl:new RecipientImpl(element)));
            });
            this._ccRecipients = ccRecipientsArrValue;
        }
    };
    /**
     * Instantiates a new invitedUserMessageInfo and sets the default values.
     * @param invitedUserMessageInfoParameterValue 
     */
    public constructor(invitedUserMessageInfoParameterValue?: InvitedUserMessageInfo | undefined) {
        this._additionalData = invitedUserMessageInfoParameterValue?.additionalData ? invitedUserMessageInfoParameterValue?.additionalData! : {};
        this._ccRecipients = invitedUserMessageInfoParameterValue?.ccRecipients;
        this._customizedMessageBody = invitedUserMessageInfoParameterValue?.customizedMessageBody;
        this._messageLanguage = invitedUserMessageInfoParameterValue?.messageLanguage;
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
        if(value) {
            this._customizedMessageBody = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ccRecipients": n => { this.ccRecipients = n.getCollectionOfObjectValues<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "customizedMessageBody": n => { this.customizedMessageBody = n.getStringValue(); },
            "messageLanguage": n => { this.messageLanguage = n.getStringValue(); },
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
        if(value) {
            this._messageLanguage = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ccRecipients && this.ccRecipients.length != 0){        const ccRecipientsArrValue: RecipientImpl[] = [];
        this.ccRecipients?.forEach(element => {
            ccRecipientsArrValue.push((element instanceof RecipientImpl? element as RecipientImpl:new RecipientImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RecipientImpl>("ccRecipients", ccRecipientsArrValue);
        }
        if(this.customizedMessageBody){
            writer.writeStringValue("customizedMessageBody", this.customizedMessageBody);
        }
        if(this.messageLanguage){
            writer.writeStringValue("messageLanguage", this.messageLanguage);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
