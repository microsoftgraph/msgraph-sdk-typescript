import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {RecipientImpl} from './index';
import {InvitedUserMessageInfo} from './invitedUserMessageInfo';
import {Recipient} from './recipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitedUserMessageInfoImpl implements AdditionalDataHolder, InvitedUserMessageInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported. */
    public ccRecipients?: Recipient[] | undefined;
    /** Customized message body you want to send if you don't want the default message. */
    public customizedMessageBody?: string | undefined;
    /** The language you want to send the default message in. If the customizedMessageBody is specified, this property is ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default is en-US. */
    public messageLanguage?: string | undefined;
    /**
     * Instantiates a new invitedUserMessageInfo and sets the default values.
     * @param invitedUserMessageInfoParameterValue 
     */
    public constructor(invitedUserMessageInfoParameterValue?: InvitedUserMessageInfo | undefined) {
        this.additionalData = invitedUserMessageInfoParameterValue?.additionalData ? invitedUserMessageInfoParameterValue?.additionalData! : {}
        this.ccRecipients = invitedUserMessageInfoParameterValue?.ccRecipients ;
        this.customizedMessageBody = invitedUserMessageInfoParameterValue?.customizedMessageBody ;
        this.messageLanguage = invitedUserMessageInfoParameterValue?.messageLanguage ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ccRecipients && this.ccRecipients.length != 0){        const ccRecipientsArrValue: RecipientImpl[] = []; this.ccRecipients?.forEach(element => {ccRecipientsArrValue.push(new RecipientImpl(element));});
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
