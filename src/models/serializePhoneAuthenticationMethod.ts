import { AuthenticationMethodSignInState } from './authenticationMethodSignInState';
import { AuthenticationPhoneType } from './authenticationPhoneType';
import { type PhoneAuthenticationMethod } from './phoneAuthenticationMethod';
import { serializeAuthenticationMethod } from './serializeAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePhoneAuthenticationMethod(writer: SerializationWriter, phoneAuthenticationMethod: PhoneAuthenticationMethod | undefined = {} as PhoneAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, phoneAuthenticationMethod)
        writer.writeStringValue("phoneNumber", phoneAuthenticationMethod.phoneNumber);
        writer.writeEnumValue<AuthenticationPhoneType>("phoneType", phoneAuthenticationMethod.phoneType);
        writer.writeEnumValue<AuthenticationMethodSignInState>("smsSignInState", phoneAuthenticationMethod.smsSignInState);
}
