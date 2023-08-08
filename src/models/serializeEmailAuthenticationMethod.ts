import type {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailAuthenticationMethod(writer: SerializationWriter, emailAuthenticationMethod: EmailAuthenticationMethod | undefined = {} as EmailAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, emailAuthenticationMethod)
        writer.writeStringValue("emailAddress", emailAuthenticationMethod.emailAddress);
}
