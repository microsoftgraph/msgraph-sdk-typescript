import type {WorkflowExecutionConditions} from './workflowExecutionConditions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowExecutionConditions(writer: SerializationWriter, workflowExecutionConditions: WorkflowExecutionConditions | undefined = {} as WorkflowExecutionConditions) : void {
        writer.writeStringValue("@odata.type", workflowExecutionConditions.odataType);
        writer.writeAdditionalData(workflowExecutionConditions.additionalData);
}
