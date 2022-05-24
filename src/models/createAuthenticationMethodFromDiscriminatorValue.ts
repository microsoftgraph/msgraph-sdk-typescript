import {AuthenticationMethodImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.authenticationMethod":
                    return new AuthenticationMethodImpl();
            }
        }
    }
    return new AuthenticationMethodImpl();
}
