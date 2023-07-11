import {deserializeIntoAzureAdPopTokenAuthentication} from './deserializeIntoAzureAdPopTokenAuthentication';
import {deserializeIntoCustomExtensionAuthenticationConfiguration} from './deserializeIntoCustomExtensionAuthenticationConfiguration';
import {AzureAdPopTokenAuthentication, CustomExtensionAuthenticationConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomExtensionAuthenticationConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.azureAdPopTokenAuthentication":
                    return deserializeIntoAzureAdPopTokenAuthentication;
            }
        }
    }
    return deserializeIntoCustomExtensionAuthenticationConfiguration;
}
