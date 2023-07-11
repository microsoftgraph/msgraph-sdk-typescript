import {Run} from './run';
import {serializeRun} from './serializeRun';
import {serializeTaskReport} from './serializeTaskReport';
import {serializeUserProcessingResult} from './serializeUserProcessingResult';
import {serializeWorkflowBase} from './serializeWorkflowBase';
import {serializeWorkflowVersion} from './serializeWorkflowVersion';
import {TaskReport} from './taskReport';
import {UserProcessingResult} from './userProcessingResult';
import {Workflow} from './workflow';
import {WorkflowVersion} from './workflowVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflow(writer: SerializationWriter, workflow: Workflow | undefined = {} as Workflow) : void {
        serializeWorkflowBase(writer, workflow)
        writer.writeDateValue("deletedDateTime", workflow.deletedDateTime);
        writer.writeCollectionOfObjectValues<UserProcessingResult>("executionScope", workflow.executionScope, serializeUserProcessingResult);
        writer.writeStringValue("id", workflow.id);
        writer.writeDateValue("nextScheduleRunDateTime", workflow.nextScheduleRunDateTime);
        writer.writeCollectionOfObjectValues<Run>("runs", workflow.runs, serializeRun);
        writer.writeCollectionOfObjectValues<TaskReport>("taskReports", workflow.taskReports, serializeTaskReport);
        writer.writeCollectionOfObjectValues<UserProcessingResult>("userProcessingResults", workflow.userProcessingResults, serializeUserProcessingResult);
        writer.writeNumberValue("version", workflow.version);
        writer.writeCollectionOfObjectValues<WorkflowVersion>("versions", workflow.versions, serializeWorkflowVersion);
}
