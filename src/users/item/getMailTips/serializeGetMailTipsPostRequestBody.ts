import { MailTipsType } from '../../../models/mailTipsType';
import { type GetMailTipsPostRequestBody } from './getMailTipsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetMailTipsPostRequestBody(writer: SerializationWriter, getMailTipsPostRequestBody: GetMailTipsPostRequestBody | undefined = {} as GetMailTipsPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("emailAddresses", getMailTipsPostRequestBody.emailAddresses);
        writer.writeEnumValue<MailTipsType>("mailTipsOptions", getMailTipsPostRequestBody.mailTipsOptions);
        writer.writeAdditionalData(getMailTipsPostRequestBody.additionalData);
}
