import {createTodoTaskListFromDiscriminatorValue} from './createTodoTaskListFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeTodoTaskList} from './serializeTodoTaskList';
import {Todo} from './todo';
import {TodoTaskList} from './todoTaskList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodo(todo: Todo | undefined = {} as Todo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(todo),
        "lists": n => { todo.lists = n.getCollectionOfObjectValues<TodoTaskList>(createTodoTaskListFromDiscriminatorValue); },
    }
}
