import {deserializeIntoCustomExtensionEndpointConfiguration} from './deserializeIntoCustomExtensionEndpointConfiguration';
import {deserializeIntoLogicAppTriggerEndpointConfiguration} from './deserializeIntoLogicAppTriggerEndpointConfiguration';
import {CustomExtensionEndpointConfiguration, LogicAppTriggerEndpointConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomExtensionEndpointConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.logicAppTriggerEndpointConfiguration":
                    return deserializeIntoLogicAppTriggerEndpointConfiguration;
            }
        }
    }
    return deserializeIntoCustomExtensionEndpointConfiguration;
}
