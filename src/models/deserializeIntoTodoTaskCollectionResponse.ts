import {createTodoTaskFromDiscriminatorValue} from './createTodoTaskFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTodoTask} from './serializeTodoTask';
import type {TodoTask} from './todoTask';
import type {TodoTaskCollectionResponse} from './todoTaskCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTodoTaskCollectionResponse(todoTaskCollectionResponse: TodoTaskCollectionResponse | undefined = {} as TodoTaskCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(todoTaskCollectionResponse),
        "value": n => { todoTaskCollectionResponse.value = n.getCollectionOfObjectValues<TodoTask>(createTodoTaskFromDiscriminatorValue); },
    }
}
