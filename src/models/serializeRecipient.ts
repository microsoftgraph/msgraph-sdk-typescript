import {EmailAddress} from './emailAddress';
import {Recipient} from './recipient';
import {serializeEmailAddress} from './serializeEmailAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecipient(writer: SerializationWriter, recipient: Recipient | undefined = {} as Recipient) : void {
        writer.writeObjectValue<EmailAddress>("emailAddress", recipient.emailAddress, serializeEmailAddress);
        writer.writeStringValue("@odata.type", recipient.odataType);
        writer.writeAdditionalData(recipient.additionalData);
}
