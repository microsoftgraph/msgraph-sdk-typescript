import {Authentication} from './authentication';
import {AuthenticationMethod} from './authenticationMethod';
import {createAuthenticationMethodFromDiscriminatorValue} from './createAuthenticationMethodFromDiscriminatorValue';
import {createEmailAuthenticationMethodFromDiscriminatorValue} from './createEmailAuthenticationMethodFromDiscriminatorValue';
import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {createLongRunningOperationFromDiscriminatorValue} from './createLongRunningOperationFromDiscriminatorValue';
import {createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue';
import {createPasswordAuthenticationMethodFromDiscriminatorValue} from './createPasswordAuthenticationMethodFromDiscriminatorValue';
import {createPhoneAuthenticationMethodFromDiscriminatorValue} from './createPhoneAuthenticationMethodFromDiscriminatorValue';
import {createSoftwareOathAuthenticationMethodFromDiscriminatorValue} from './createSoftwareOathAuthenticationMethodFromDiscriminatorValue';
import {createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue} from './createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import {createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue} from './createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EmailAuthenticationMethod} from './emailAuthenticationMethod';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {LongRunningOperation} from './longRunningOperation';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {PasswordAuthenticationMethod} from './passwordAuthenticationMethod';
import {PhoneAuthenticationMethod} from './phoneAuthenticationMethod';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeEmailAuthenticationMethod} from './serializeEmailAuthenticationMethod';
import {serializeFido2AuthenticationMethod} from './serializeFido2AuthenticationMethod';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {serializeMicrosoftAuthenticatorAuthenticationMethod} from './serializeMicrosoftAuthenticatorAuthenticationMethod';
import {serializePasswordAuthenticationMethod} from './serializePasswordAuthenticationMethod';
import {serializePhoneAuthenticationMethod} from './serializePhoneAuthenticationMethod';
import {serializeSoftwareOathAuthenticationMethod} from './serializeSoftwareOathAuthenticationMethod';
import {serializeTemporaryAccessPassAuthenticationMethod} from './serializeTemporaryAccessPassAuthenticationMethod';
import {serializeWindowsHelloForBusinessAuthenticationMethod} from './serializeWindowsHelloForBusinessAuthenticationMethod';
import {SoftwareOathAuthenticationMethod} from './softwareOathAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthentication(authentication: Authentication | undefined = {} as Authentication) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authentication),
        "emailMethods": n => { authentication.emailMethods = n.getCollectionOfObjectValues<EmailAuthenticationMethod>(createEmailAuthenticationMethodFromDiscriminatorValue); },
        "fido2Methods": n => { authentication.fido2Methods = n.getCollectionOfObjectValues<Fido2AuthenticationMethod>(createFido2AuthenticationMethodFromDiscriminatorValue); },
        "methods": n => { authentication.methods = n.getCollectionOfObjectValues<AuthenticationMethod>(createAuthenticationMethodFromDiscriminatorValue); },
        "microsoftAuthenticatorMethods": n => { authentication.microsoftAuthenticatorMethods = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethod>(createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue); },
        "operations": n => { authentication.operations = n.getCollectionOfObjectValues<LongRunningOperation>(createLongRunningOperationFromDiscriminatorValue); },
        "passwordMethods": n => { authentication.passwordMethods = n.getCollectionOfObjectValues<PasswordAuthenticationMethod>(createPasswordAuthenticationMethodFromDiscriminatorValue); },
        "phoneMethods": n => { authentication.phoneMethods = n.getCollectionOfObjectValues<PhoneAuthenticationMethod>(createPhoneAuthenticationMethodFromDiscriminatorValue); },
        "softwareOathMethods": n => { authentication.softwareOathMethods = n.getCollectionOfObjectValues<SoftwareOathAuthenticationMethod>(createSoftwareOathAuthenticationMethodFromDiscriminatorValue); },
        "temporaryAccessPassMethods": n => { authentication.temporaryAccessPassMethods = n.getCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethod>(createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue); },
        "windowsHelloForBusinessMethods": n => { authentication.windowsHelloForBusinessMethods = n.getCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>(createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue); },
    }
}
