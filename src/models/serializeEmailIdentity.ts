import { type EmailIdentity } from './emailIdentity';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEmailIdentity(writer: SerializationWriter, emailIdentity: EmailIdentity | undefined = {} as EmailIdentity) : void {
        serializeIdentity(writer, emailIdentity)
        writer.writeStringValue("email", emailIdentity.email);
}
