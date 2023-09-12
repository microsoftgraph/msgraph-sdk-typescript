import { serializeUser } from '../serializeUser';
import { type User } from '../user';
import { LifecycleWorkflowCategory } from './lifecycleWorkflowCategory';
import { serializeTask } from './serializeTask';
import { serializeWorkflowExecutionConditions } from './serializeWorkflowExecutionConditions';
import { type Task } from './task';
import { type WorkflowBase } from './workflowBase';
import { type WorkflowExecutionConditions } from './workflowExecutionConditions';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkflowBase(writer: SerializationWriter, workflowBase: WorkflowBase | undefined = {} as WorkflowBase) : void {
        writer.writeEnumValue<LifecycleWorkflowCategory>("category", workflowBase.category);
        writer.writeObjectValue<User>("createdBy", workflowBase.createdBy, serializeUser);
        writer.writeDateValue("createdDateTime", workflowBase.createdDateTime);
        writer.writeStringValue("description", workflowBase.description);
        writer.writeStringValue("displayName", workflowBase.displayName);
        writer.writeObjectValue<WorkflowExecutionConditions>("executionConditions", workflowBase.executionConditions, serializeWorkflowExecutionConditions);
        writer.writeBooleanValue("isEnabled", workflowBase.isEnabled);
        writer.writeBooleanValue("isSchedulingEnabled", workflowBase.isSchedulingEnabled);
        writer.writeObjectValue<User>("lastModifiedBy", workflowBase.lastModifiedBy, serializeUser);
        writer.writeDateValue("lastModifiedDateTime", workflowBase.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", workflowBase.odataType);
        writer.writeCollectionOfObjectValues<Task>("tasks", workflowBase.tasks, serializeTask);
        writer.writeAdditionalData(workflowBase.additionalData);
}
