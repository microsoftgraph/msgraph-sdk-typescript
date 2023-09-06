import { deserializeIntoTodoTaskList } from './deserializeIntoTodoTaskList';
import { type TodoTaskList } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTodoTaskListFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodoTaskList;
}
