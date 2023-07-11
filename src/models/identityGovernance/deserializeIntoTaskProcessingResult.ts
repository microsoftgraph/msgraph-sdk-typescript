import {createUserFromDiscriminatorValue} from '../createUserFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {serializeUser} from '../serializeUser';
import {User} from '../user';
import {createTaskFromDiscriminatorValue} from './createTaskFromDiscriminatorValue';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {serializeTask} from './serializeTask';
import {Task} from './task';
import {TaskProcessingResult} from './taskProcessingResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskProcessingResult(taskProcessingResult: TaskProcessingResult | undefined = {} as TaskProcessingResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(taskProcessingResult),
        "completedDateTime": n => { taskProcessingResult.completedDateTime = n.getDateValue(); },
        "createdDateTime": n => { taskProcessingResult.createdDateTime = n.getDateValue(); },
        "failureReason": n => { taskProcessingResult.failureReason = n.getStringValue(); },
        "processingStatus": n => { taskProcessingResult.processingStatus = n.getEnumValue<LifecycleWorkflowProcessingStatus>(LifecycleWorkflowProcessingStatus); },
        "startedDateTime": n => { taskProcessingResult.startedDateTime = n.getDateValue(); },
        "subject": n => { taskProcessingResult.subject = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "task": n => { taskProcessingResult.task = n.getObjectValue<Task>(createTaskFromDiscriminatorValue); },
    }
}
