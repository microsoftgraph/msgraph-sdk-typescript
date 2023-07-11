import {serializeEntity} from '../serializeEntity';
import {serializeUser} from '../serializeUser';
import {User} from '../user';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {serializeTask} from './serializeTask';
import {Task} from './task';
import {TaskProcessingResult} from './taskProcessingResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskProcessingResult(writer: SerializationWriter, taskProcessingResult: TaskProcessingResult | undefined = {} as TaskProcessingResult) : void {
        serializeEntity(writer, taskProcessingResult)
        writer.writeDateValue("completedDateTime", taskProcessingResult.completedDateTime);
        writer.writeDateValue("createdDateTime", taskProcessingResult.createdDateTime);
        writer.writeStringValue("failureReason", taskProcessingResult.failureReason);
        writer.writeEnumValue<LifecycleWorkflowProcessingStatus>("processingStatus", taskProcessingResult.processingStatus);
        writer.writeDateValue("startedDateTime", taskProcessingResult.startedDateTime);
        writer.writeObjectValue<User>("subject", taskProcessingResult.subject, serializeUser);
        writer.writeObjectValue<Task>("task", taskProcessingResult.task, serializeTask);
}
