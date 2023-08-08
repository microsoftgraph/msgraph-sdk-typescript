import type {WorkflowExecutionTrigger} from './workflowExecutionTrigger';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowExecutionTrigger(writer: SerializationWriter, workflowExecutionTrigger: WorkflowExecutionTrigger | undefined = {} as WorkflowExecutionTrigger) : void {
        writer.writeStringValue("@odata.type", workflowExecutionTrigger.odataType);
        writer.writeAdditionalData(workflowExecutionTrigger.additionalData);
}
