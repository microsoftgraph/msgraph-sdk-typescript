import {Recipient} from './recipient';

export interface InvitedUserMessageInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported. */
    ccRecipients?:Recipient[] | undefined;
    /** Customized message body you want to send if you don't want the default message. */
    customizedMessageBody?:string | undefined;
    /** The language you want to send the default message in. If the customizedMessageBody is specified, this property is ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default is en-US. */
    messageLanguage?:string | undefined;
}
