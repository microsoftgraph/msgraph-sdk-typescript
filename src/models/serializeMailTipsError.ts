import { type MailTipsError } from './mailTipsError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMailTipsError(writer: SerializationWriter, mailTipsError: MailTipsError | undefined = {} as MailTipsError) : void {
        writer.writeStringValue("code", mailTipsError.code);
        writer.writeStringValue("message", mailTipsError.message);
        writer.writeStringValue("@odata.type", mailTipsError.odataType);
        writer.writeAdditionalData(mailTipsError.additionalData);
}
