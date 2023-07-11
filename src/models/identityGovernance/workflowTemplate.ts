import {Entity} from '../entity';
import {LifecycleWorkflowCategory} from './lifecycleWorkflowCategory';
import {Task} from './task';
import {WorkflowExecutionConditions} from './workflowExecutionConditions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkflowTemplate extends Entity, Parsable {
    /**
     * The category property
     */
    category?: LifecycleWorkflowCategory | undefined;
    /**
     * The description of the workflowTemplate.
     */
    description?: string | undefined;
    /**
     * The display name of the workflowTemplate.Supports $filter(eq, ne) and $orderby.
     */
    displayName?: string | undefined;
    /**
     * Conditions describing when to execute the workflow and the criteria to identify in-scope subject set.
     */
    executionConditions?: WorkflowExecutionConditions | undefined;
    /**
     * Represents the configured tasks to execute and their execution sequence within a workflow. This relationship is expanded by default.
     */
    tasks?: Task[] | undefined;
}
