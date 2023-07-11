import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createTaskProcessingResultFromDiscriminatorValue} from './createTaskProcessingResultFromDiscriminatorValue';
import {createUserProcessingResultFromDiscriminatorValue} from './createUserProcessingResultFromDiscriminatorValue';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {Run} from './run';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {serializeUserProcessingResult} from './serializeUserProcessingResult';
import {TaskProcessingResult} from './taskProcessingResult';
import {UserProcessingResult} from './userProcessingResult';
import {WorkflowExecutionType} from './workflowExecutionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRun(run: Run | undefined = {} as Run) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(run),
        "completedDateTime": n => { run.completedDateTime = n.getDateValue(); },
        "failedTasksCount": n => { run.failedTasksCount = n.getNumberValue(); },
        "failedUsersCount": n => { run.failedUsersCount = n.getNumberValue(); },
        "lastUpdatedDateTime": n => { run.lastUpdatedDateTime = n.getDateValue(); },
        "processingStatus": n => { run.processingStatus = n.getEnumValue<LifecycleWorkflowProcessingStatus>(LifecycleWorkflowProcessingStatus); },
        "scheduledDateTime": n => { run.scheduledDateTime = n.getDateValue(); },
        "startedDateTime": n => { run.startedDateTime = n.getDateValue(); },
        "successfulUsersCount": n => { run.successfulUsersCount = n.getNumberValue(); },
        "taskProcessingResults": n => { run.taskProcessingResults = n.getCollectionOfObjectValues<TaskProcessingResult>(createTaskProcessingResultFromDiscriminatorValue); },
        "totalTasksCount": n => { run.totalTasksCount = n.getNumberValue(); },
        "totalUnprocessedTasksCount": n => { run.totalUnprocessedTasksCount = n.getNumberValue(); },
        "totalUsersCount": n => { run.totalUsersCount = n.getNumberValue(); },
        "userProcessingResults": n => { run.userProcessingResults = n.getCollectionOfObjectValues<UserProcessingResult>(createUserProcessingResultFromDiscriminatorValue); },
        "workflowExecutionType": n => { run.workflowExecutionType = n.getEnumValue<WorkflowExecutionType>(WorkflowExecutionType); },
    }
}
