import {KeyValuePair} from '../keyValuePair';
import {serializeEntity} from '../serializeEntity';
import {serializeKeyValuePair} from '../serializeKeyValuePair';
import {LifecycleTaskCategory} from './lifecycleTaskCategory';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {Task} from './task';
import {TaskProcessingResult} from './taskProcessingResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTask(writer: SerializationWriter, task: Task | undefined = {} as Task) : void {
        serializeEntity(writer, task)
        writer.writeCollectionOfObjectValues<KeyValuePair>("arguments", task.arguments, serializeKeyValuePair);
        writer.writeEnumValue<LifecycleTaskCategory>("category", task.category);
        writer.writeBooleanValue("continueOnError", task.continueOnError);
        writer.writeStringValue("description", task.description);
        writer.writeStringValue("displayName", task.displayName);
        writer.writeNumberValue("executionSequence", task.executionSequence);
        writer.writeBooleanValue("isEnabled", task.isEnabled);
        writer.writeStringValue("taskDefinitionId", task.taskDefinitionId);
        writer.writeCollectionOfObjectValues<TaskProcessingResult>("taskProcessingResults", task.taskProcessingResults, serializeTaskProcessingResult);
}
