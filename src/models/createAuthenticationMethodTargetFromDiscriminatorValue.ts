import {AuthenticationMethodTarget, MicrosoftAuthenticatorAuthenticationMethodTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodTarget":
                    return new MicrosoftAuthenticatorAuthenticationMethodTarget();
            }
        }
    }
    return new AuthenticationMethodTarget();
}
