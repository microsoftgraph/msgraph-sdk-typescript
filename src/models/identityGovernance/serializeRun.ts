import {serializeEntity} from '../serializeEntity';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {Run} from './run';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {serializeUserProcessingResult} from './serializeUserProcessingResult';
import {TaskProcessingResult} from './taskProcessingResult';
import {UserProcessingResult} from './userProcessingResult';
import {WorkflowExecutionType} from './workflowExecutionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRun(writer: SerializationWriter, run: Run | undefined = {} as Run) : void {
        serializeEntity(writer, run)
        writer.writeDateValue("completedDateTime", run.completedDateTime);
        writer.writeNumberValue("failedTasksCount", run.failedTasksCount);
        writer.writeNumberValue("failedUsersCount", run.failedUsersCount);
        writer.writeDateValue("lastUpdatedDateTime", run.lastUpdatedDateTime);
        writer.writeEnumValue<LifecycleWorkflowProcessingStatus>("processingStatus", run.processingStatus);
        writer.writeDateValue("scheduledDateTime", run.scheduledDateTime);
        writer.writeDateValue("startedDateTime", run.startedDateTime);
        writer.writeNumberValue("successfulUsersCount", run.successfulUsersCount);
        writer.writeCollectionOfObjectValues<TaskProcessingResult>("taskProcessingResults", run.taskProcessingResults, serializeTaskProcessingResult);
        writer.writeNumberValue("totalTasksCount", run.totalTasksCount);
        writer.writeNumberValue("totalUnprocessedTasksCount", run.totalUnprocessedTasksCount);
        writer.writeNumberValue("totalUsersCount", run.totalUsersCount);
        writer.writeCollectionOfObjectValues<UserProcessingResult>("userProcessingResults", run.userProcessingResults, serializeUserProcessingResult);
        writer.writeEnumValue<WorkflowExecutionType>("workflowExecutionType", run.workflowExecutionType);
}
