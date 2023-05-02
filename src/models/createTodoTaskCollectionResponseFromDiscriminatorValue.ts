import {deserializeIntoTodoTaskCollectionResponse} from './deserializeIntoTodoTaskCollectionResponse';
import {TodoTaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTodoTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTodoTaskCollectionResponse;
}
