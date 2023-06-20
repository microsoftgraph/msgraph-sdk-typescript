import {MailTipsError} from './mailTipsError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailTipsError(mailTipsError: MailTipsError | undefined = {} as MailTipsError, writer: SerializationWriter) : void {
        writer.writeStringValue("code", mailTipsError.code);
        writer.writeStringValue("message", mailTipsError.message);
        writer.writeStringValue("@odata.type", mailTipsError.odataType);
        writer.writeAdditionalData(mailTipsError.additionalData);
}
