import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTodoTask} from './serializeTodoTask';
import type {TodoTask} from './todoTask';
import type {TodoTaskCollectionResponse} from './todoTaskCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskCollectionResponse(writer: SerializationWriter, todoTaskCollectionResponse: TodoTaskCollectionResponse | undefined = {} as TodoTaskCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, todoTaskCollectionResponse)
        writer.writeCollectionOfObjectValues<TodoTask>("value", todoTaskCollectionResponse.value, serializeTodoTask);
}
