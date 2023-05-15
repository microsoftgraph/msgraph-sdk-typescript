import {createTodoTaskListFromDiscriminatorValue} from '../../../../models/createTodoTaskListFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {serializeTodoTaskList} from '../../../../models/serializeTodoTaskList';
import {TodoTaskList} from '../../../../models/todoTaskList';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<TodoTaskList>(createTodoTaskListFromDiscriminatorValue); },
    }
}
