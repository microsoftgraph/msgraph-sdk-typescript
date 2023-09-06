import { type EmailAddress } from './emailAddress';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEmailAddress(writer: SerializationWriter, emailAddress: EmailAddress | undefined = {} as EmailAddress) : void {
        writer.writeStringValue("address", emailAddress.address);
        writer.writeStringValue("name", emailAddress.name);
        writer.writeStringValue("@odata.type", emailAddress.odataType);
        writer.writeAdditionalData(emailAddress.additionalData);
}
