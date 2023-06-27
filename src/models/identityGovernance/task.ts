import {Entity} from '../entity';
import {KeyValuePair} from '../keyValuePair';
import {LifecycleTaskCategory} from './lifecycleTaskCategory';
import {TaskProcessingResult} from './taskProcessingResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Task extends Entity, Parsable {
    /**
     * Arguments included within the task.  For guidance to configure this property, see Configure the arguments for built-in Lifecycle Workflow tasks. Required.
     */
    arguments?: KeyValuePair[] | undefined;
    /**
     * The category property
     */
    category?: LifecycleTaskCategory | undefined;
    /**
     * A boolean value that specifies whether, if this task fails, the workflow will stop, and subsequent tasks will not run. Optional.
     */
    continueOnError?: boolean | undefined;
    /**
     * A string that describes the purpose of the task for administrative use. Optional.
     */
    description?: string | undefined;
    /**
     * A unique string that identifies the task. Required.Supports $filter(eq, ne) and orderBy.
     */
    displayName?: string | undefined;
    /**
     * An integer that states in what order the task will run in a workflow.Supports $orderby.
     */
    executionSequence?: number | undefined;
    /**
     * A boolean value that denotes whether the task is set to run or not. Optional.Supports $filter(eq, ne) and orderBy.
     */
    isEnabled?: boolean | undefined;
    /**
     * A unique template identifier for the task. For more information about the tasks that Lifecycle Workflows currently supports and their unique identifiers, see supported tasks. Required.Supports $filter(eq, ne).
     */
    taskDefinitionId?: string | undefined;
    /**
     * The result of processing the task.
     */
    taskProcessingResults?: TaskProcessingResult[] | undefined;
}
