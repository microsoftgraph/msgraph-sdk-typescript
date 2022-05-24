import {MailTipsType} from '../../../models/mailTipsType';

export interface GetMailTipsPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The EmailAddresses property */
    emailAddresses?:string[] | undefined;
    /** The MailTipsOptions property */
    mailTipsOptions?:MailTipsType | undefined;
}
