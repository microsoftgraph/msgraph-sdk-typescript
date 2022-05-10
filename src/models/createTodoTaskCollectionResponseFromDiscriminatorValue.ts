import {TodoTaskCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TodoTaskCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TodoTaskCollectionResponseImpl();
}
