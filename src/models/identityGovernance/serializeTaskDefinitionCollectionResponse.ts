import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeTaskDefinition} from './serializeTaskDefinition';
import {TaskDefinition} from './taskDefinition';
import {TaskDefinitionCollectionResponse} from './taskDefinitionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTaskDefinitionCollectionResponse(writer: SerializationWriter, taskDefinitionCollectionResponse: TaskDefinitionCollectionResponse | undefined = {} as TaskDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, taskDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<TaskDefinition>("value", taskDefinitionCollectionResponse.value, serializeTaskDefinition);
}
