import type {DeletedItemContainer} from '../deletedItemContainer';
import {serializeDeletedItemContainer} from '../serializeDeletedItemContainer';
import {serializeEntity} from '../serializeEntity';
import type {CustomTaskExtension} from './customTaskExtension';
import type {LifecycleManagementSettings} from './lifecycleManagementSettings';
import type {LifecycleWorkflowsContainer} from './lifecycleWorkflowsContainer';
import {serializeCustomTaskExtension} from './serializeCustomTaskExtension';
import {serializeLifecycleManagementSettings} from './serializeLifecycleManagementSettings';
import {serializeTaskDefinition} from './serializeTaskDefinition';
import {serializeWorkflow} from './serializeWorkflow';
import {serializeWorkflowTemplate} from './serializeWorkflowTemplate';
import type {TaskDefinition} from './taskDefinition';
import type {Workflow} from './workflow';
import type {WorkflowTemplate} from './workflowTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLifecycleWorkflowsContainer(writer: SerializationWriter, lifecycleWorkflowsContainer: LifecycleWorkflowsContainer | undefined = {} as LifecycleWorkflowsContainer) : void {
        serializeEntity(writer, lifecycleWorkflowsContainer)
        writer.writeCollectionOfObjectValues<CustomTaskExtension>("customTaskExtensions", lifecycleWorkflowsContainer.customTaskExtensions, serializeCustomTaskExtension);
        writer.writeObjectValue<DeletedItemContainer>("deletedItems", lifecycleWorkflowsContainer.deletedItems, serializeDeletedItemContainer);
        writer.writeObjectValue<LifecycleManagementSettings>("settings", lifecycleWorkflowsContainer.settings, serializeLifecycleManagementSettings);
        writer.writeCollectionOfObjectValues<TaskDefinition>("taskDefinitions", lifecycleWorkflowsContainer.taskDefinitions, serializeTaskDefinition);
        writer.writeCollectionOfObjectValues<Workflow>("workflows", lifecycleWorkflowsContainer.workflows, serializeWorkflow);
        writer.writeCollectionOfObjectValues<WorkflowTemplate>("workflowTemplates", lifecycleWorkflowsContainer.workflowTemplates, serializeWorkflowTemplate);
}
