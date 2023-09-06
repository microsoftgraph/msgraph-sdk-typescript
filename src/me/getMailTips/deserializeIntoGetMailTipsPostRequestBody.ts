import { MailTipsType } from '../../models/mailTipsType';
import { type GetMailTipsPostRequestBody } from './getMailTipsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMailTipsPostRequestBody(getMailTipsPostRequestBody: GetMailTipsPostRequestBody | undefined = {} as GetMailTipsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "emailAddresses": n => { getMailTipsPostRequestBody.emailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "mailTipsOptions": n => { getMailTipsPostRequestBody.mailTipsOptions = n.getCollectionOfEnumValues<MailTipsType>(MailTipsType); },
    }
}
