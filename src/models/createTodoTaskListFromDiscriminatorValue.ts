import {TodoTaskListImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskListFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoTaskListImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoTaskListImpl();
}
