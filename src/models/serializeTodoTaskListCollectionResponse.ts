import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTodoTaskList} from './serializeTodoTaskList';
import {TodoTaskList} from './todoTaskList';
import {TodoTaskListCollectionResponse} from './todoTaskListCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodoTaskListCollectionResponse(writer: SerializationWriter, todoTaskListCollectionResponse: TodoTaskListCollectionResponse | undefined = {} as TodoTaskListCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, todoTaskListCollectionResponse)
        writer.writeCollectionOfObjectValues<TodoTaskList>("value", todoTaskListCollectionResponse.value, serializeTodoTaskList);
}
