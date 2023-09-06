import { deserializeIntoTodoTaskCollectionResponse } from './deserializeIntoTodoTaskCollectionResponse';
import { type TodoTaskCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTodoTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodoTaskCollectionResponse;
}
