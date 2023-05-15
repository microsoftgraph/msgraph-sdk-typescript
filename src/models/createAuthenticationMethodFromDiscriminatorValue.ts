import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {deserializeIntoEmailAuthenticationMethod} from './deserializeIntoEmailAuthenticationMethod';
import {deserializeIntoFido2AuthenticationMethod} from './deserializeIntoFido2AuthenticationMethod';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethod} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethod';
import {deserializeIntoPasswordAuthenticationMethod} from './deserializeIntoPasswordAuthenticationMethod';
import {deserializeIntoPhoneAuthenticationMethod} from './deserializeIntoPhoneAuthenticationMethod';
import {deserializeIntoSoftwareOathAuthenticationMethod} from './deserializeIntoSoftwareOathAuthenticationMethod';
import {deserializeIntoTemporaryAccessPassAuthenticationMethod} from './deserializeIntoTemporaryAccessPassAuthenticationMethod';
import {deserializeIntoWindowsHelloForBusinessAuthenticationMethod} from './deserializeIntoWindowsHelloForBusinessAuthenticationMethod';
import {AuthenticationMethod, EmailAuthenticationMethod, Fido2AuthenticationMethod, MicrosoftAuthenticatorAuthenticationMethod, PasswordAuthenticationMethod, PhoneAuthenticationMethod, SoftwareOathAuthenticationMethod, TemporaryAccessPassAuthenticationMethod, WindowsHelloForBusinessAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.emailAuthenticationMethod":
                    return deserializeIntoEmailAuthenticationMethod;
                case "#microsoft.graph.fido2AuthenticationMethod":
                    return deserializeIntoFido2AuthenticationMethod;
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod":
                    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethod;
                case "#microsoft.graph.passwordAuthenticationMethod":
                    return deserializeIntoPasswordAuthenticationMethod;
                case "#microsoft.graph.phoneAuthenticationMethod":
                    return deserializeIntoPhoneAuthenticationMethod;
                case "#microsoft.graph.softwareOathAuthenticationMethod":
                    return deserializeIntoSoftwareOathAuthenticationMethod;
                case "#microsoft.graph.temporaryAccessPassAuthenticationMethod":
                    return deserializeIntoTemporaryAccessPassAuthenticationMethod;
                case "#microsoft.graph.windowsHelloForBusinessAuthenticationMethod":
                    return deserializeIntoWindowsHelloForBusinessAuthenticationMethod;
            }
        }
    }
    return deserializeIntoAuthenticationMethod;
}
