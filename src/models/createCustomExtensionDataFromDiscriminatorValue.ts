import { deserializeIntoAccessPackageAssignmentRequestCallbackData } from './deserializeIntoAccessPackageAssignmentRequestCallbackData';
import { deserializeIntoCustomExtensionData } from './deserializeIntoCustomExtensionData';
import { type CustomTaskExtensionCallbackData, type CustomTaskExtensionCalloutData } from './identityGovernance/';
import { deserializeIntoCustomTaskExtensionCallbackData } from './identityGovernance/deserializeIntoCustomTaskExtensionCallbackData';
import { deserializeIntoCustomTaskExtensionCalloutData } from './identityGovernance/deserializeIntoCustomTaskExtensionCalloutData';
import { type AccessPackageAssignmentRequestCallbackData, type CustomExtensionData } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomExtensionDataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessPackageAssignmentRequestCallbackData":
                    return deserializeIntoAccessPackageAssignmentRequestCallbackData;
                case "#microsoft.graph.identityGovernance.customTaskExtensionCallbackData":
                    return deserializeIntoCustomTaskExtensionCallbackData;
                case "#microsoft.graph.identityGovernance.customTaskExtensionCalloutData":
                    return deserializeIntoCustomTaskExtensionCalloutData;
            }
        }
    }
    return deserializeIntoCustomExtensionData;
}
