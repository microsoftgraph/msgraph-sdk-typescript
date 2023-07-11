import {WorkflowExecutionConditions} from './workflowExecutionConditions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowExecutionConditions(writer: SerializationWriter, workflowExecutionConditions: WorkflowExecutionConditions | undefined = {} as WorkflowExecutionConditions) : void {
        writer.writeStringValue("@odata.type", workflowExecutionConditions.odataType);
        writer.writeAdditionalData(workflowExecutionConditions.additionalData);
}
