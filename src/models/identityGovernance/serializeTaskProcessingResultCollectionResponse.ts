import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeTaskProcessingResult} from './serializeTaskProcessingResult';
import {TaskProcessingResult} from './taskProcessingResult';
import {TaskProcessingResultCollectionResponse} from './taskProcessingResultCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskProcessingResultCollectionResponse(writer: SerializationWriter, taskProcessingResultCollectionResponse: TaskProcessingResultCollectionResponse | undefined = {} as TaskProcessingResultCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, taskProcessingResultCollectionResponse)
        writer.writeCollectionOfObjectValues<TaskProcessingResult>("value", taskProcessingResultCollectionResponse.value, serializeTaskProcessingResult);
}
