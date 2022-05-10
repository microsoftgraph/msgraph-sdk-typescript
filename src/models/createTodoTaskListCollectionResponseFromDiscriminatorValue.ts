import {TodoTaskListCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoTaskListCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoTaskListCollectionResponseImpl();
}
