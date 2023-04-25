import {AuthenticationCombinationConfiguration, Fido2CombinationConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationCombinationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationCombinationConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.fido2CombinationConfiguration":
                    return new Fido2CombinationConfiguration();
            }
        }
    }
    return new AuthenticationCombinationConfiguration();
}
