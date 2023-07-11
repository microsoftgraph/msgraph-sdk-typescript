import {deserializeIntoAccessPackageAssignmentRequestWorkflowExtension} from './deserializeIntoAccessPackageAssignmentRequestWorkflowExtension';
import {deserializeIntoAccessPackageAssignmentWorkflowExtension} from './deserializeIntoAccessPackageAssignmentWorkflowExtension';
import {deserializeIntoCustomCalloutExtension} from './deserializeIntoCustomCalloutExtension';
import {CustomTaskExtension} from './identityGovernance/';
import {deserializeIntoCustomTaskExtension} from './identityGovernance/deserializeIntoCustomTaskExtension';
import {AccessPackageAssignmentRequestWorkflowExtension, AccessPackageAssignmentWorkflowExtension, CustomCalloutExtension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomCalloutExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessPackageAssignmentRequestWorkflowExtension":
                    return deserializeIntoAccessPackageAssignmentRequestWorkflowExtension;
                case "#microsoft.graph.accessPackageAssignmentWorkflowExtension":
                    return deserializeIntoAccessPackageAssignmentWorkflowExtension;
                case "#microsoft.graph.identityGovernance.customTaskExtension":
                    return deserializeIntoCustomTaskExtension;
            }
        }
    }
    return deserializeIntoCustomCalloutExtension;
}
