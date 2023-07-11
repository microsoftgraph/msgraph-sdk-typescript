import {createUserFromDiscriminatorValue} from '../createUserFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {serializeUser} from '../serializeUser';
import {User} from '../user';
import {createTaskProcessingResultFromDiscriminatorValue} from './createTaskProcessingResultFromDiscriminatorValue';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {TaskProcessingResult} from './taskProcessingResult';
import {UserProcessingResult} from './userProcessingResult';
import {WorkflowExecutionType} from './workflowExecutionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserProcessingResult(userProcessingResult: UserProcessingResult | undefined = {} as UserProcessingResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userProcessingResult),
        "completedDateTime": n => { userProcessingResult.completedDateTime = n.getDateValue(); },
        "failedTasksCount": n => { userProcessingResult.failedTasksCount = n.getNumberValue(); },
        "processingStatus": n => { userProcessingResult.processingStatus = n.getEnumValue<LifecycleWorkflowProcessingStatus>(LifecycleWorkflowProcessingStatus); },
        "scheduledDateTime": n => { userProcessingResult.scheduledDateTime = n.getDateValue(); },
        "startedDateTime": n => { userProcessingResult.startedDateTime = n.getDateValue(); },
        "subject": n => { userProcessingResult.subject = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "taskProcessingResults": n => { userProcessingResult.taskProcessingResults = n.getCollectionOfObjectValues<TaskProcessingResult>(createTaskProcessingResultFromDiscriminatorValue); },
        "totalTasksCount": n => { userProcessingResult.totalTasksCount = n.getNumberValue(); },
        "totalUnprocessedTasksCount": n => { userProcessingResult.totalUnprocessedTasksCount = n.getNumberValue(); },
        "workflowExecutionType": n => { userProcessingResult.workflowExecutionType = n.getEnumValue<WorkflowExecutionType>(WorkflowExecutionType); },
        "workflowVersion": n => { userProcessingResult.workflowVersion = n.getNumberValue(); },
    }
}
