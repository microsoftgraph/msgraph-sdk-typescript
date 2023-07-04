import {Entity} from '../entity';
import {User} from '../user';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {TaskProcessingResult} from './taskProcessingResult';
import {WorkflowExecutionType} from './workflowExecutionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserProcessingResult extends Entity, Parsable {
    /**
     * The date time that the workflow execution for a user completed. Value is null if the workflow hasn't completed.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    completedDateTime?: Date | undefined;
    /**
     * The number of tasks that failed in the workflow execution.
     */
    failedTasksCount?: number | undefined;
    /**
     * The processingStatus property
     */
    processingStatus?: LifecycleWorkflowProcessingStatus | undefined;
    /**
     * The date time that the workflow is scheduled to be executed for a user.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    scheduledDateTime?: Date | undefined;
    /**
     * The date time that the workflow execution started. Value is null if the workflow execution has not started.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    startedDateTime?: Date | undefined;
    /**
     * The subject property
     */
    subject?: User | undefined;
    /**
     * The associated individual task execution.
     */
    taskProcessingResults?: TaskProcessingResult[] | undefined;
    /**
     * The total number of tasks that in the workflow execution.
     */
    totalTasksCount?: number | undefined;
    /**
     * The total number of unprocessed tasks for the workflow.
     */
    totalUnprocessedTasksCount?: number | undefined;
    /**
     * The workflowExecutionType property
     */
    workflowExecutionType?: WorkflowExecutionType | undefined;
    /**
     * The version of the workflow that was executed.
     */
    workflowVersion?: number | undefined;
}
