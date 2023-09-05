import { deserializeIntoTodoTaskListCollectionResponse } from './deserializeIntoTodoTaskListCollectionResponse';
import { type TodoTaskListCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTodoTaskListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodoTaskListCollectionResponse;
}
