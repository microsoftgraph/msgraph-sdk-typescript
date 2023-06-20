import {AuthenticationMethod} from './authenticationMethod';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethod(authenticationMethod: AuthenticationMethod | undefined = {} as AuthenticationMethod, writer: SerializationWriter) : void {
        serializeEntity(writer, authenticationMethod)
}
