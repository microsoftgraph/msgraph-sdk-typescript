import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createTaskDefinitionFromDiscriminatorValue} from './createTaskDefinitionFromDiscriminatorValue';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {createTaskProcessingResultFromDiscriminatorValue} from './createTaskProcessingResultFromDiscriminatorValue';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {serializeTask} from './serializeTask';
import {serializeTaskDefinition} from './serializeTaskDefinition';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {Task} from './task';
import {TaskDefinition} from './taskDefinition';
import {TaskProcessingResult} from './taskProcessingResult';
import {TaskReport} from './taskReport';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskReport(taskReport: TaskReport | undefined = {} as TaskReport) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(taskReport),
        "completedDateTime": n => { taskReport.completedDateTime = n.getDateValue(); },
        "failedUsersCount": n => { taskReport.failedUsersCount = n.getNumberValue(); },
        "lastUpdatedDateTime": n => { taskReport.lastUpdatedDateTime = n.getDateValue(); },
        "processingStatus": n => { taskReport.processingStatus = n.getEnumValue<LifecycleWorkflowProcessingStatus>(LifecycleWorkflowProcessingStatus); },
        "runId": n => { taskReport.runId = n.getStringValue(); },
        "startedDateTime": n => { taskReport.startedDateTime = n.getDateValue(); },
        "successfulUsersCount": n => { taskReport.successfulUsersCount = n.getNumberValue(); },
        "task": n => { taskReport.task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
        "taskDefinition": n => { taskReport.taskDefinition = n.getObjectValue<TaskDefinition>(createTaskDefinitionFromDiscriminatorValue); },
        "taskProcessingResults": n => { taskReport.taskProcessingResults = n.getCollectionOfObjectValues<TaskProcessingResult>(createTaskProcessingResultFromDiscriminatorValue); },
        "totalUsersCount": n => { taskReport.totalUsersCount = n.getNumberValue(); },
        "unprocessedUsersCount": n => { taskReport.unprocessedUsersCount = n.getNumberValue(); },
    }
}
