import {MailTipsType} from '../../../models/mailTipsType';
import {GetMailTipsPostRequestBody} from './getMailTipsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMailTipsPostRequestBody(getMailTipsPostRequestBody: GetMailTipsPostRequestBody | undefined = {} as GetMailTipsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "emailAddresses": n => { getMailTipsPostRequestBody.emailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "mailTipsOptions": n => { getMailTipsPostRequestBody.mailTipsOptions = n.getEnumValue<MailTipsType>(MailTipsType); },
    }
}
