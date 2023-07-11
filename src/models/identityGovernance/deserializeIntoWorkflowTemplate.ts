import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createWorkflowExecutionConditionsFromDiscriminatorValue} from './createWorkflowExecutionConditionsFromDiscriminatorValue';
import {LifecycleWorkflowCategory} from './lifecycleWorkflowCategory';
import {serializeTask} from './serializeTask';
import {serializeWorkflowExecutionConditions} from './serializeWorkflowExecutionConditions';
import {Task} from './task';
import {WorkflowExecutionConditions} from './workflowExecutionConditions';
import {WorkflowTemplate} from './workflowTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowTemplate(workflowTemplate: WorkflowTemplate | undefined = {} as WorkflowTemplate) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workflowTemplate),
        "category": n => { workflowTemplate.category = n.getEnumValue<LifecycleWorkflowCategory>(LifecycleWorkflowCategory); },
        "description": n => { workflowTemplate.description = n.getStringValue(); },
        "displayName": n => { workflowTemplate.displayName = n.getStringValue(); },
        "executionConditions": n => { workflowTemplate.executionConditions = n.getObjectValue<WorkflowExecutionConditions>(createWorkflowExecutionConditionsFromDiscriminatorValue); },
        "tasks": n => { workflowTemplate.tasks = n.getCollectionOfObjectValues<Task>(createTaskFromDiscriminatorValue); },
    }
}
