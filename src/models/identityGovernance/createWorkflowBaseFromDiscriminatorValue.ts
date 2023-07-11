import {deserializeIntoWorkflow} from './deserializeIntoWorkflow';
import {deserializeIntoWorkflowBase} from './deserializeIntoWorkflowBase';
import {deserializeIntoWorkflowVersion} from './deserializeIntoWorkflowVersion';
import {Workflow, WorkflowBase, WorkflowVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityGovernance.workflow":
                    return deserializeIntoWorkflow;
                case "#microsoft.graph.identityGovernance.workflowVersion":
                    return deserializeIntoWorkflowVersion;
            }
        }
    }
    return deserializeIntoWorkflowBase;
}
