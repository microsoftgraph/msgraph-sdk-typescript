import { deserializeIntoTodoTask } from './deserializeIntoTodoTask';
import { type TodoTask } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTodoTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodoTask;
}
