import {Entity} from '../entity';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {Task} from './task';
import {TaskDefinition} from './taskDefinition';
import {TaskProcessingResult} from './taskProcessingResult';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskReport extends Entity, Parsable {
    /**
     * The date time that the associated run completed. Value is null if the run has not completed.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    completedDateTime?: Date | undefined;
    /**
     * The number of users in the run execution for which the associated task failed.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    failedUsersCount?: number | undefined;
    /**
     * The date and time that the task report was last updated.
     */
    lastUpdatedDateTime?: Date | undefined;
    /**
     * The processingStatus property
     */
    processingStatus?: LifecycleWorkflowProcessingStatus | undefined;
    /**
     * The unique identifier of the associated run.
     */
    runId?: string | undefined;
    /**
     * The date time that the associated run started. Value is null if the run has not started.
     */
    startedDateTime?: Date | undefined;
    /**
     * The number of users in the run execution for which the associated task succeeded.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    successfulUsersCount?: number | undefined;
    /**
     * The task property
     */
    task?: Task | undefined;
    /**
     * The taskDefinition property
     */
    taskDefinition?: TaskDefinition | undefined;
    /**
     * The related lifecycle workflow taskProcessingResults.
     */
    taskProcessingResults?: TaskProcessingResult[] | undefined;
    /**
     * The total number of users in the run execution for which the associated task was scheduled to execute.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    totalUsersCount?: number | undefined;
    /**
     * The number of users in the run execution for which the associated task is queued, in progress, or canceled.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    unprocessedUsersCount?: number | undefined;
}
