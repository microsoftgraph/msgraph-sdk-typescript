import {deserializeIntoCustomExtensionCallbackConfiguration} from './deserializeIntoCustomExtensionCallbackConfiguration';
import {CustomTaskExtensionCallbackConfiguration} from './identityGovernance/';
import {deserializeIntoCustomTaskExtensionCallbackConfiguration} from './identityGovernance/deserializeIntoCustomTaskExtensionCallbackConfiguration';
import {CustomExtensionCallbackConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomExtensionCallbackConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityGovernance.customTaskExtensionCallbackConfiguration":
                    return deserializeIntoCustomTaskExtensionCallbackConfiguration;
            }
        }
    }
    return deserializeIntoCustomExtensionCallbackConfiguration;
}
