import {DeletedItemContainer} from '../deletedItemContainer';
import {Entity} from '../entity';
import {CustomTaskExtension} from './customTaskExtension';
import {LifecycleManagementSettings} from './lifecycleManagementSettings';
import {TaskDefinition} from './taskDefinition';
import {Workflow} from './workflow';
import {WorkflowTemplate} from './workflowTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

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
