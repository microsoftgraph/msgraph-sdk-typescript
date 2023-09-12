import { serializeEntity } from './serializeEntity';
import { serializeTodoTaskList } from './serializeTodoTaskList';
import { type Todo } from './todo';
import { type TodoTaskList } from './todoTaskList';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTodo(writer: SerializationWriter, todo: Todo | undefined = {} as Todo) : void {
        serializeEntity(writer, todo)
        writer.writeCollectionOfObjectValues<TodoTaskList>("lists", todo.lists, serializeTodoTaskList);
}
