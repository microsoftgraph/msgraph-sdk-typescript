import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { serializeTaskDefinition } from './serializeTaskDefinition';
import { type TaskDefinition } from './taskDefinition';
import { type TaskDefinitionCollectionResponse } from './taskDefinitionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTaskDefinitionCollectionResponse(writer: SerializationWriter, taskDefinitionCollectionResponse: TaskDefinitionCollectionResponse | undefined = {} as TaskDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, taskDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<TaskDefinition>("value", taskDefinitionCollectionResponse.value, serializeTaskDefinition);
}
