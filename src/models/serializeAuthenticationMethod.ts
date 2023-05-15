import {AuthenticationMethod} from './authenticationMethod';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethod(writer: SerializationWriter, authenticationMethod: AuthenticationMethod | undefined = {} as AuthenticationMethod) : void {
        serializeEntity(writer, authenticationMethod)
}
