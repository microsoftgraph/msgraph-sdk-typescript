import {Run} from './run';
import {TaskReport} from './taskReport';
import {UserProcessingResult} from './userProcessingResult';
import {WorkflowBase} from './workflowBase';
import {WorkflowVersion} from './workflowVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Workflow extends Parsable, WorkflowBase {
    /**
     * When the workflow was deleted.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    deletedDateTime?: Date | undefined;
    /**
     * The unique identifier of the Azure AD identity that last modified the workflow object.
     */
    executionScope?: UserProcessingResult[] | undefined;
    /**
     * Identifier used for individually addressing a specific workflow.Supports $filter(eq, ne) and $orderby.
     */
    id?: string | undefined;
    /**
     * The date time when the workflow is expected to run next based on the schedule interval, if there are any users matching the execution conditions. Supports $filter(lt,gt) and $orderBy.
     */
    nextScheduleRunDateTime?: Date | undefined;
    /**
     * Workflow runs.
     */
    runs?: Run[] | undefined;
    /**
     * Represents the aggregation of task execution data for tasks within a workflow object.
     */
    taskReports?: TaskReport[] | undefined;
    /**
     * Per-user workflow execution results.
     */
    userProcessingResults?: UserProcessingResult[] | undefined;
    /**
     * The current version number of the workflow. Value is 1 when the workflow is first created.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    version?: number | undefined;
    /**
     * The workflow versions that are available.
     */
    versions?: WorkflowVersion[] | undefined;
}
