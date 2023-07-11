import {Entity} from '../entity';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {TaskProcessingResult} from './taskProcessingResult';
import {UserProcessingResult} from './userProcessingResult';
import {WorkflowExecutionType} from './workflowExecutionType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Run extends Entity, Parsable {
    /**
     * The date time that the run completed. Value is null if the workflow hasn't completed.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    completedDateTime?: Date | undefined;
    /**
     * The number of tasks that failed in the run execution.
     */
    failedTasksCount?: number | undefined;
    /**
     * The number of users that failed in the run execution.
     */
    failedUsersCount?: number | undefined;
    /**
     * The datetime that the run was last updated.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * The processingStatus property
     */
    processingStatus?: LifecycleWorkflowProcessingStatus | undefined;
    /**
     * The date time that the run is scheduled to be executed for a workflow.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    scheduledDateTime?: Date | undefined;
    /**
     * The date time that the run execution started.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    startedDateTime?: Date | undefined;
    /**
     * The number of successfully completed users in the run.
     */
    successfulUsersCount?: number | undefined;
    /**
     * The related taskProcessingResults.
     */
    taskProcessingResults?: TaskProcessingResult[] | undefined;
    /**
     * The totalTasksCount property
     */
    totalTasksCount?: number | undefined;
    /**
     * The total number of unprocessed tasks in the run execution.
     */
    totalUnprocessedTasksCount?: number | undefined;
    /**
     * The total number of users in the workflow execution.
     */
    totalUsersCount?: number | undefined;
    /**
     * The associated individual user execution.
     */
    userProcessingResults?: UserProcessingResult[] | undefined;
    /**
     * The workflowExecutionType property
     */
    workflowExecutionType?: WorkflowExecutionType | undefined;
}
