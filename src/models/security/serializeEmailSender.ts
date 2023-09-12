import { type EmailSender } from './emailSender';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEmailSender(writer: SerializationWriter, emailSender: EmailSender | undefined = {} as EmailSender) : void {
        writer.writeStringValue("displayName", emailSender.displayName);
        writer.writeStringValue("domainName", emailSender.domainName);
        writer.writeStringValue("emailAddress", emailSender.emailAddress);
        writer.writeStringValue("@odata.type", emailSender.odataType);
        writer.writeAdditionalData(emailSender.additionalData);
}
