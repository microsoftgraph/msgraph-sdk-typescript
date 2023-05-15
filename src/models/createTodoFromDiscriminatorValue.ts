import {deserializeIntoTodo} from './deserializeIntoTodo';
import {Todo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodo;
}
