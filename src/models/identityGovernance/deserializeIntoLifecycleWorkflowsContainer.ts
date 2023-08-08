import {createDeletedItemContainerFromDiscriminatorValue} from '../createDeletedItemContainerFromDiscriminatorValue';
import type {DeletedItemContainer} from '../deletedItemContainer';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {serializeDeletedItemContainer} from '../serializeDeletedItemContainer';
import {createCustomTaskExtensionFromDiscriminatorValue} from './createCustomTaskExtensionFromDiscriminatorValue';
import {createLifecycleManagementSettingsFromDiscriminatorValue} from './createLifecycleManagementSettingsFromDiscriminatorValue';
import {createTaskDefinitionFromDiscriminatorValue} from './createTaskDefinitionFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {createWorkflowTemplateFromDiscriminatorValue} from './createWorkflowTemplateFromDiscriminatorValue';
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
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLifecycleWorkflowsContainer(lifecycleWorkflowsContainer: LifecycleWorkflowsContainer | undefined = {} as LifecycleWorkflowsContainer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(lifecycleWorkflowsContainer),
        "customTaskExtensions": n => { lifecycleWorkflowsContainer.customTaskExtensions = n.getCollectionOfObjectValues<CustomTaskExtension>(createCustomTaskExtensionFromDiscriminatorValue); },
        "deletedItems": n => { lifecycleWorkflowsContainer.deletedItems = n.getObjectValue<DeletedItemContainer>(createDeletedItemContainerFromDiscriminatorValue); },
        "settings": n => { lifecycleWorkflowsContainer.settings = n.getObjectValue<LifecycleManagementSettings>(createLifecycleManagementSettingsFromDiscriminatorValue); },
        "taskDefinitions": n => { lifecycleWorkflowsContainer.taskDefinitions = n.getCollectionOfObjectValues<TaskDefinition>(createTaskDefinitionFromDiscriminatorValue); },
        "workflows": n => { lifecycleWorkflowsContainer.workflows = n.getCollectionOfObjectValues<Workflow>(createWorkflowFromDiscriminatorValue); },
        "workflowTemplates": n => { lifecycleWorkflowsContainer.workflowTemplates = n.getCollectionOfObjectValues<WorkflowTemplate>(createWorkflowTemplateFromDiscriminatorValue); },
    }
}
