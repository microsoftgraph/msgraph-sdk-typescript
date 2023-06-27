import {createRunFromDiscriminatorValue} from './createRunFromDiscriminatorValue';
import {createTaskReportFromDiscriminatorValue} from './createTaskReportFromDiscriminatorValue';
import {createUserProcessingResultFromDiscriminatorValue} from './createUserProcessingResultFromDiscriminatorValue';
import {createWorkflowVersionFromDiscriminatorValue} from './createWorkflowVersionFromDiscriminatorValue';
import {deserializeIntoWorkflowBase} from './deserializeIntoWorkflowBase';
import {Run} from './run';
import {serializeRun} from './serializeRun';
import {serializeTaskReport} from './serializeTaskReport';
import {serializeUserProcessingResult} from './serializeUserProcessingResult';
import {serializeWorkflowVersion} from './serializeWorkflowVersion';
import {TaskReport} from './taskReport';
import {UserProcessingResult} from './userProcessingResult';
import {Workflow} from './workflow';
import {WorkflowVersion} from './workflowVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
