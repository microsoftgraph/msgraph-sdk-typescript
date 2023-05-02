import {AuthenticationMethodSignInState} from './authenticationMethodSignInState';
import {AuthenticationPhoneType} from './authenticationPhoneType';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhoneAuthenticationMethod(phoneAuthenticationMethod: PhoneAuthenticationMethod | undefined = {} as PhoneAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(phoneAuthenticationMethod),
        "phoneNumber": n => { phoneAuthenticationMethod.phoneNumber = n.getStringValue(); },
        "phoneType": n => { phoneAuthenticationMethod.phoneType = n.getEnumValue<AuthenticationPhoneType>(AuthenticationPhoneType); },
        "smsSignInState": n => { phoneAuthenticationMethod.smsSignInState = n.getEnumValue<AuthenticationMethodSignInState>(AuthenticationMethodSignInState); },
    }
}
