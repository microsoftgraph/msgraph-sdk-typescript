import {TodoTaskImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoTaskImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoTaskImpl();
}
