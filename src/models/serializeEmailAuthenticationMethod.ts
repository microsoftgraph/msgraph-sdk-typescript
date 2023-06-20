import {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethod(emailAuthenticationMethod: EmailAuthenticationMethod | undefined = {} as EmailAuthenticationMethod, writer: SerializationWriter) : void {
        serializeAuthenticationMethod(writer, emailAuthenticationMethod)
        writer.writeStringValue("emailAddress", emailAuthenticationMethod.emailAddress);
}
