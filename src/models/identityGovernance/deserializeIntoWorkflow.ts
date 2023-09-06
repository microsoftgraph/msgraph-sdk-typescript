import { createRunFromDiscriminatorValue } from './createRunFromDiscriminatorValue';
import { createTaskReportFromDiscriminatorValue } from './createTaskReportFromDiscriminatorValue';
import { createUserProcessingResultFromDiscriminatorValue } from './createUserProcessingResultFromDiscriminatorValue';
import { createWorkflowVersionFromDiscriminatorValue } from './createWorkflowVersionFromDiscriminatorValue';
import { deserializeIntoWorkflowBase } from './deserializeIntoWorkflowBase';
import { type Run } from './run';
import { serializeRun } from './serializeRun';
import { serializeTaskReport } from './serializeTaskReport';
import { serializeUserProcessingResult } from './serializeUserProcessingResult';
import { serializeWorkflowVersion } from './serializeWorkflowVersion';
import { type TaskReport } from './taskReport';
import { type UserProcessingResult } from './userProcessingResult';
import { type Workflow } from './workflow';
import { type WorkflowVersion } from './workflowVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflow(workflow: Workflow | undefined = {} as Workflow) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWorkflowBase(workflow),
        "deletedDateTime": n => { workflow.deletedDateTime = n.getDateValue(); },
        "executionScope": n => { workflow.executionScope = n.getCollectionOfObjectValues<UserProcessingResult>(createUserProcessingResultFromDiscriminatorValue); },
        "id": n => { workflow.id = n.getStringValue(); },
        "nextScheduleRunDateTime": n => { workflow.nextScheduleRunDateTime = n.getDateValue(); },
        "runs": n => { workflow.runs = n.getCollectionOfObjectValues<Run>(createRunFromDiscriminatorValue); },
        "taskReports": n => { workflow.taskReports = n.getCollectionOfObjectValues<TaskReport>(createTaskReportFromDiscriminatorValue); },
        "userProcessingResults": n => { workflow.userProcessingResults = n.getCollectionOfObjectValues<UserProcessingResult>(createUserProcessingResultFromDiscriminatorValue); },
        "version": n => { workflow.version = n.getNumberValue(); },
        "versions": n => { workflow.versions = n.getCollectionOfObjectValues<WorkflowVersion>(createWorkflowVersionFromDiscriminatorValue); },
    }
}
