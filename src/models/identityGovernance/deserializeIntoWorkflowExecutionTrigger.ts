import { type WorkflowExecutionTrigger } from './workflowExecutionTrigger';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowExecutionTrigger(workflowExecutionTrigger: WorkflowExecutionTrigger | undefined = {} as WorkflowExecutionTrigger) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { workflowExecutionTrigger.odataType = n.getStringValue(); },
    }
}
