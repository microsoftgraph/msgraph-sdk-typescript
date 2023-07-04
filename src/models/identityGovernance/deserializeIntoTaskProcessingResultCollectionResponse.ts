import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createTaskProcessingResultFromDiscriminatorValue} from './createTaskProcessingResultFromDiscriminatorValue';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {TaskProcessingResult} from './taskProcessingResult';
import {TaskProcessingResultCollectionResponse} from './taskProcessingResultCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTaskProcessingResultCollectionResponse(taskProcessingResultCollectionResponse: TaskProcessingResultCollectionResponse | undefined = {} as TaskProcessingResultCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(taskProcessingResultCollectionResponse),
        "value": n => { taskProcessingResultCollectionResponse.value = n.getCollectionOfObjectValues<TaskProcessingResult>(createTaskProcessingResultFromDiscriminatorValue); },
    }
}
