import {AuthenticationMethodConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.authenticationMethodConfiguration":
                    return new AuthenticationMethodConfiguration();
            }
        }
    }
    return new AuthenticationMethodConfiguration();
}
