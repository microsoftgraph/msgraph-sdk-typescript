import {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordAuthenticationMethod(writer: SerializationWriter, passwordAuthenticationMethod: PasswordAuthenticationMethod | undefined = {} as PasswordAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, passwordAuthenticationMethod)
        writer.writeDateValue("createdDateTime", passwordAuthenticationMethod.createdDateTime);
        writer.writeStringValue("password", passwordAuthenticationMethod.password);
}
