import {AuthenticationMethod} from './authenticationMethod';
import {AuthenticationMethodSignInState} from './authenticationMethodSignInState';
import {AuthenticationPhoneType} from './authenticationPhoneType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PhoneAuthenticationMethod extends AuthenticationMethod, Parsable {
    /**
     * The phone number to text or call for authentication. Phone numbers use the format +{country code} {number}x{extension}, with extension optional. For example, +1 5555551234 or +1 5555551234x123 are valid. Numbers are rejected when creating or updating if they do not match the required format.
     */
    phoneNumber?: string | undefined;
    /**
     * The type of this phone. Possible values are: mobile, alternateMobile, or office.
     */
    phoneType?: AuthenticationPhoneType | undefined;
    /**
     * Whether a phone is ready to be used for SMS sign-in or not. Possible values are: notSupported, notAllowedByPolicy, notEnabled, phoneNumberNotUnique, ready, or notConfigured, unknownFutureValue.
     */
    smsSignInState?: AuthenticationMethodSignInState | undefined;
}
