import { serializeEntity } from '../serializeEntity';
import { serializeUser } from '../serializeUser';
import { type User } from '../user';
import { LifecycleWorkflowProcessingStatus } from './lifecycleWorkflowProcessingStatus';
import { serializeTaskProcessingResult } from './serializeTaskProcessingResult';
import { type TaskProcessingResult } from './taskProcessingResult';
import { type UserProcessingResult } from './userProcessingResult';
import { WorkflowExecutionType } from './workflowExecutionType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserProcessingResult(writer: SerializationWriter, userProcessingResult: UserProcessingResult | undefined = {} as UserProcessingResult) : void {
        serializeEntity(writer, userProcessingResult)
        writer.writeDateValue("completedDateTime", userProcessingResult.completedDateTime);
        writer.writeNumberValue("failedTasksCount", userProcessingResult.failedTasksCount);
        writer.writeEnumValue<LifecycleWorkflowProcessingStatus>("processingStatus", userProcessingResult.processingStatus);
        writer.writeDateValue("scheduledDateTime", userProcessingResult.scheduledDateTime);
        writer.writeDateValue("startedDateTime", userProcessingResult.startedDateTime);
        writer.writeObjectValue<User>("subject", userProcessingResult.subject, serializeUser);
        writer.writeCollectionOfObjectValues<TaskProcessingResult>("taskProcessingResults", userProcessingResult.taskProcessingResults, serializeTaskProcessingResult);
        writer.writeNumberValue("totalTasksCount", userProcessingResult.totalTasksCount);
        writer.writeNumberValue("totalUnprocessedTasksCount", userProcessingResult.totalUnprocessedTasksCount);
        writer.writeEnumValue<WorkflowExecutionType>("workflowExecutionType", userProcessingResult.workflowExecutionType);
        writer.writeNumberValue("workflowVersion", userProcessingResult.workflowVersion);
}
