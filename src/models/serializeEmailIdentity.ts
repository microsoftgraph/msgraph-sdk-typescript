import {EmailIdentity} from './emailIdentity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailIdentity(emailIdentity: EmailIdentity | undefined = {} as EmailIdentity, writer: SerializationWriter) : void {
        serializeIdentity(writer, emailIdentity)
        writer.writeStringValue("email", emailIdentity.email);
}
