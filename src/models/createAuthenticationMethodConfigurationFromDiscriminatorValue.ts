import {AuthenticationMethodConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.authenticationMethodConfiguration":
                    return new AuthenticationMethodConfigurationImpl();
            }
        }
    }
    return new AuthenticationMethodConfigurationImpl();
}
