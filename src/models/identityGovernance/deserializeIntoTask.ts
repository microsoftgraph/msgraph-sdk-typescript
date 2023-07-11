import {createKeyValuePairFromDiscriminatorValue} from '../createKeyValuePairFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {KeyValuePair} from '../keyValuePair';
import {serializeKeyValuePair} from '../serializeKeyValuePair';
import {createTaskProcessingResultFromDiscriminatorValue} from './createTaskProcessingResultFromDiscriminatorValue';
import {LifecycleTaskCategory} from './lifecycleTaskCategory';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {Task} from './task';
import {TaskProcessingResult} from './taskProcessingResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTask(task: Task | undefined = {} as Task) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(task),
        "arguments": n => { task.arguments = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        "category": n => { task.category = n.getEnumValue<LifecycleTaskCategory>(LifecycleTaskCategory); },
        "continueOnError": n => { task.continueOnError = n.getBooleanValue(); },
        "description": n => { task.description = n.getStringValue(); },
        "displayName": n => { task.displayName = n.getStringValue(); },
        "executionSequence": n => { task.executionSequence = n.getNumberValue(); },
        "isEnabled": n => { task.isEnabled = n.getBooleanValue(); },
        "taskDefinitionId": n => { task.taskDefinitionId = n.getStringValue(); },
        "taskProcessingResults": n => { task.taskProcessingResults = n.getCollectionOfObjectValues<TaskProcessingResult>(createTaskProcessingResultFromDiscriminatorValue); },
    }
}
