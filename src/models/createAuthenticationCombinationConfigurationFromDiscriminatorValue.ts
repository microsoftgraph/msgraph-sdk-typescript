import {deserializeIntoAuthenticationCombinationConfiguration} from './deserializeIntoAuthenticationCombinationConfiguration';
import {deserializeIntoFido2CombinationConfiguration} from './deserializeIntoFido2CombinationConfiguration';
import {AuthenticationCombinationConfiguration, Fido2CombinationConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationCombinationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.fido2CombinationConfiguration":
                    return deserializeIntoFido2CombinationConfiguration;
            }
        }
    }
    return deserializeIntoAuthenticationCombinationConfiguration;
}
