import { type WorkflowExecutionConditions } from './workflowExecutionConditions';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowExecutionConditions(workflowExecutionConditions: WorkflowExecutionConditions | undefined = {} as WorkflowExecutionConditions) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { workflowExecutionConditions.odataType = n.getStringValue(); },
    }
}
