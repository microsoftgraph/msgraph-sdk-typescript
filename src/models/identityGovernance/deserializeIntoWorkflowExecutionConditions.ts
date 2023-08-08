import type {WorkflowExecutionConditions} from './workflowExecutionConditions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowExecutionConditions(workflowExecutionConditions: WorkflowExecutionConditions | undefined = {} as WorkflowExecutionConditions) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { workflowExecutionConditions.odataType = n.getStringValue(); },
    }
}
