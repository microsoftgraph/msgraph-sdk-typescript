import { type DeletedItemContainer } from '../deletedItemContainer';
import { type Entity } from '../entity';
import { type CustomTaskExtension } from './customTaskExtension';
import { type LifecycleManagementSettings } from './lifecycleManagementSettings';
import { type TaskDefinition } from './taskDefinition';
import { type Workflow } from './workflow';
import { type WorkflowTemplate } from './workflowTemplate';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface LifecycleWorkflowsContainer extends Entity, Parsable {
    /**
     * The customTaskExtension instance.
     */
    customTaskExtensions?: CustomTaskExtension[] | undefined;
    /**
     * Deleted workflows in your lifecycle workflows instance.
     */
    deletedItems?: DeletedItemContainer | undefined;
    /**
     * The settings property
     */
    settings?: LifecycleManagementSettings | undefined;
    /**
     * The definition of tasks within the lifecycle workflows instance.
     */
    taskDefinitions?: TaskDefinition[] | undefined;
    /**
     * The workflows in the lifecycle workflows instance.
     */
    workflows?: Workflow[] | undefined;
    /**
     * The workflow templates in the lifecycle workflow instance.
     */
    workflowTemplates?: WorkflowTemplate[] | undefined;
}
