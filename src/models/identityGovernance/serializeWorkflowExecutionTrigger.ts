import { type WorkflowExecutionTrigger } from './workflowExecutionTrigger';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkflowExecutionTrigger(writer: SerializationWriter, workflowExecutionTrigger: WorkflowExecutionTrigger | undefined = {} as WorkflowExecutionTrigger) : void {
        writer.writeStringValue("@odata.type", workflowExecutionTrigger.odataType);
        writer.writeAdditionalData(workflowExecutionTrigger.additionalData);
}
