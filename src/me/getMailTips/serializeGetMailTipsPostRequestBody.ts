import {MailTipsType} from '../../models/mailTipsType';
import {GetMailTipsPostRequestBody} from './getMailTipsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMailTipsPostRequestBody(getMailTipsPostRequestBody: GetMailTipsPostRequestBody | undefined = {} as GetMailTipsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("emailAddresses", getMailTipsPostRequestBody.emailAddresses);
        writer.writeEnumValue<MailTipsType>("mailTipsOptions", getMailTipsPostRequestBody.mailTipsOptions);
        writer.writeAdditionalData(getMailTipsPostRequestBody.additionalData);
}
