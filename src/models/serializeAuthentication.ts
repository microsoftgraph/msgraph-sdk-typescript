import type {Authentication} from './authentication';
import type {AuthenticationMethod} from './authenticationMethod';
import type {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import type {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import type {LongRunningOperation} from './longRunningOperation';
import type {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import type {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import type {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeEmailAuthenticationMethod} from './serializeEmailAuthenticationMethod';
import {serializeEntity} from './serializeEntity';
import {serializeFido2AuthenticationMethod} from './serializeFido2AuthenticationMethod';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {serializeMicrosoftAuthenticatorAuthenticationMethod} from './serializeMicrosoftAuthenticatorAuthenticationMethod';
import {serializePasswordAuthenticationMethod} from './serializePasswordAuthenticationMethod';
import {serializePhoneAuthenticationMethod} from './serializePhoneAuthenticationMethod';
import {serializeSoftwareOathAuthenticationMethod} from './serializeSoftwareOathAuthenticationMethod';
import {serializeTemporaryAccessPassAuthenticationMethod} from './serializeTemporaryAccessPassAuthenticationMethod';
import {serializeWindowsHelloForBusinessAuthenticationMethod} from './serializeWindowsHelloForBusinessAuthenticationMethod';
import type {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import type {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import type {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthentication(writer: SerializationWriter, authentication: Authentication | undefined = {} as Authentication) : void {
        serializeEntity(writer, authentication)
        writer.writeCollectionOfObjectValues<EmailAuthenticationMethod>("emailMethods", authentication.emailMethods, serializeEmailAuthenticationMethod);
        writer.writeCollectionOfObjectValues<Fido2AuthenticationMethod>("fido2Methods", authentication.fido2Methods, serializeFido2AuthenticationMethod);
        writer.writeCollectionOfObjectValues<AuthenticationMethod>("methods", authentication.methods, serializeAuthenticationMethod);
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>("microsoftAuthenticatorMethods", authentication.microsoftAuthenticatorMethods, serializeMicrosoftAuthenticatorAuthenticationMethod);
        writer.writeCollectionOfObjectValues<LongRunningOperation>("operations", authentication.operations, serializeLongRunningOperation);
        writer.writeCollectionOfObjectValues<PasswordAuthenticationMethod>("passwordMethods", authentication.passwordMethods, serializePasswordAuthenticationMethod);
        writer.writeCollectionOfObjectValues<PhoneAuthenticationMethod>("phoneMethods", authentication.phoneMethods, serializePhoneAuthenticationMethod);
        writer.writeCollectionOfObjectValues<SoftwareOathAuthenticationMethod>("softwareOathMethods", authentication.softwareOathMethods, serializeSoftwareOathAuthenticationMethod);
        writer.writeCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>("temporaryAccessPassMethods", authentication.temporaryAccessPassMethods, serializeTemporaryAccessPassAuthenticationMethod);
        writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>("windowsHelloForBusinessMethods", authentication.windowsHelloForBusinessMethods, serializeWindowsHelloForBusinessAuthenticationMethod);
}
