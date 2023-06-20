import {EmailAddress} from './emailAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAddress(emailAddress: EmailAddress | undefined = {} as EmailAddress, writer: SerializationWriter) : void {
        writer.writeStringValue("address", emailAddress.address);
        writer.writeStringValue("name", emailAddress.name);
        writer.writeStringValue("@odata.type", emailAddress.odataType);
        writer.writeAdditionalData(emailAddress.additionalData);
}
