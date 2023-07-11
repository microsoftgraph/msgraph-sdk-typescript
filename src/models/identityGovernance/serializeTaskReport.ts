import {serializeEntity} from '../serializeEntity';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {serializeTask} from './serializeTask';
import {serializeTaskDefinition} from './serializeTaskDefinition';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {Task} from './task';
import {TaskDefinition} from './taskDefinition';
import {TaskProcessingResult} from './taskProcessingResult';
import {TaskReport} from './taskReport';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskReport(writer: SerializationWriter, taskReport: TaskReport | undefined = {} as TaskReport) : void {
        serializeEntity(writer, taskReport)
        writer.writeDateValue("completedDateTime", taskReport.completedDateTime);
        writer.writeNumberValue("failedUsersCount", taskReport.failedUsersCount);
        writer.writeDateValue("lastUpdatedDateTime", taskReport.lastUpdatedDateTime);
        writer.writeEnumValue<LifecycleWorkflowProcessingStatus>("processingStatus", taskReport.processingStatus);
        writer.writeStringValue("runId", taskReport.runId);
        writer.writeDateValue("startedDateTime", taskReport.startedDateTime);
        writer.writeNumberValue("successfulUsersCount", taskReport.successfulUsersCount);
        writer.writeObjectValue<Task>("task", taskReport.task, serializeTask);
        writer.writeObjectValue<TaskDefinition>("taskDefinition", taskReport.taskDefinition, serializeTaskDefinition);
        writer.writeCollectionOfObjectValues<TaskProcessingResult>("taskProcessingResults", taskReport.taskProcessingResults, serializeTaskProcessingResult);
        writer.writeNumberValue("totalUsersCount", taskReport.totalUsersCount);
        writer.writeNumberValue("unprocessedUsersCount", taskReport.unprocessedUsersCount);
}
