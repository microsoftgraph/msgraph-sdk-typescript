import { deserializeIntoTimeBasedAttributeTrigger } from './deserializeIntoTimeBasedAttributeTrigger';
import { deserializeIntoWorkflowExecutionTrigger } from './deserializeIntoWorkflowExecutionTrigger';
import { type TimeBasedAttributeTrigger, type WorkflowExecutionTrigger } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkflowExecutionTriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityGovernance.timeBasedAttributeTrigger":
                    return deserializeIntoTimeBasedAttributeTrigger;
            }
        }
    }
    return deserializeIntoWorkflowExecutionTrigger;
}
