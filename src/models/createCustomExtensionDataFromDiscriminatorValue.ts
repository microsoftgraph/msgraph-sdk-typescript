import {deserializeIntoCustomExtensionData} from './deserializeIntoCustomExtensionData';
import {CustomTaskExtensionCallbackData} from './identityGovernance/';
import {deserializeIntoCustomTaskExtensionCallbackData} from './identityGovernance/deserializeIntoCustomTaskExtensionCallbackData';
import {CustomExtensionData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomExtensionDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityGovernance.customTaskExtensionCallbackData":
                    return deserializeIntoCustomTaskExtensionCallbackData;
            }
        }
    }
    return deserializeIntoCustomExtensionData;
}
