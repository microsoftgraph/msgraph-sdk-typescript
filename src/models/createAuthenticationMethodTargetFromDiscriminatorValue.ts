import {deserializeIntoAuthenticationMethodTarget} from './deserializeIntoAuthenticationMethodTarget';
import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget';
import {deserializeIntoSmsAuthenticationMethodTarget} from './deserializeIntoSmsAuthenticationMethodTarget';
import {AuthenticationMethodTarget, MicrosoftAuthenticatorAuthenticationMethodTarget, SmsAuthenticationMethodTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodTarget":
                    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethodTarget;
                case "#microsoft.graph.smsAuthenticationMethodTarget":
                    return deserializeIntoSmsAuthenticationMethodTarget;
            }
        }
    }
    return deserializeIntoAuthenticationMethodTarget;
}
