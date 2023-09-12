import { createTodoTaskListFromDiscriminatorValue } from './createTodoTaskListFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTodoTaskList } from './serializeTodoTaskList';
import { type TodoTaskList } from './todoTaskList';
import { type TodoTaskListCollectionResponse } from './todoTaskListCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskListCollectionResponse(todoTaskListCollectionResponse: TodoTaskListCollectionResponse | undefined = {} as TodoTaskListCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(todoTaskListCollectionResponse),
        "value": n => { todoTaskListCollectionResponse.value = n.getCollectionOfObjectValues<TodoTaskList>(createTodoTaskListFromDiscriminatorValue); },
    }
}
