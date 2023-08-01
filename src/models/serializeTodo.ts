import {serializeEntity} from './serializeEntity';
import {serializeTodoTaskList} from './serializeTodoTaskList';
import type {Todo} from './todo';
import type {TodoTaskList} from './todoTaskList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTodo(writer: SerializationWriter, todo: Todo | undefined = {} as Todo) : void {
        serializeEntity(writer, todo)
        writer.writeCollectionOfObjectValues<TodoTaskList>("lists", todo.lists, serializeTodoTaskList);
}
