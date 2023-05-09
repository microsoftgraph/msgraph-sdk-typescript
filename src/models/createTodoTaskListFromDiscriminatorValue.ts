import {deserializeIntoTodoTaskList} from './deserializeIntoTodoTaskList';
import {TodoTaskList} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskListFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodoTaskList;
}
