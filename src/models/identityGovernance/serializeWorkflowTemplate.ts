import {serializeEntity} from '../serializeEntity';
import {LifecycleWorkflowCategory} from './lifecycleWorkflowCategory';
import {serializeTask} from './serializeTask';
import {serializeWorkflowExecutionConditions} from './serializeWorkflowExecutionConditions';
import type {Task} from './task';
import type {WorkflowExecutionConditions} from './workflowExecutionConditions';
import type {WorkflowTemplate} from './workflowTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowTemplate(writer: SerializationWriter, workflowTemplate: WorkflowTemplate | undefined = {} as WorkflowTemplate) : void {
        serializeEntity(writer, workflowTemplate)
        writer.writeEnumValue<LifecycleWorkflowCategory>("category", workflowTemplate.category);
        writer.writeStringValue("description", workflowTemplate.description);
        writer.writeStringValue("displayName", workflowTemplate.displayName);
        writer.writeObjectValue<WorkflowExecutionConditions>("executionConditions", workflowTemplate.executionConditions, serializeWorkflowExecutionConditions);
        writer.writeCollectionOfObjectValues<Task>("tasks", workflowTemplate.tasks, serializeTask);
}
