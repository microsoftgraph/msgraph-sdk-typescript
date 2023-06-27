import {deserializeIntoOnDemandExecutionOnly} from './deserializeIntoOnDemandExecutionOnly';
import {deserializeIntoTriggerAndScopeBasedConditions} from './deserializeIntoTriggerAndScopeBasedConditions';
import {deserializeIntoWorkflowExecutionConditions} from './deserializeIntoWorkflowExecutionConditions';
import {OnDemandExecutionOnly, TriggerAndScopeBasedConditions, WorkflowExecutionConditions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowExecutionConditionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.identityGovernance.onDemandExecutionOnly":
                    return deserializeIntoOnDemandExecutionOnly;
                case "#microsoft.graph.identityGovernance.triggerAndScopeBasedConditions":
                    return deserializeIntoTriggerAndScopeBasedConditions;
            }
        }
    }
    return deserializeIntoWorkflowExecutionConditions;
}
