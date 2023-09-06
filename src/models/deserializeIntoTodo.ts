import { createTodoTaskListFromDiscriminatorValue } from './createTodoTaskListFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeTodoTaskList } from './serializeTodoTaskList';
import { type Todo } from './todo';
import { type TodoTaskList } from './todoTaskList';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTodo(todo: Todo | undefined = {} as Todo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(todo),
        "lists": n => { todo.lists = n.getCollectionOfObjectValues<TodoTaskList>(createTodoTaskListFromDiscriminatorValue); },
    }
}
