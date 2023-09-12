import { deserializeIntoTodo } from './deserializeIntoTodo';
import { type Todo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTodoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodo;
}
