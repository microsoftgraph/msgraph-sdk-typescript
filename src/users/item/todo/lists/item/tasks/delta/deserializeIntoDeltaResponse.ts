import {createTodoTaskFromDiscriminatorValue} from '../../../../../../../models/createTodoTaskFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {serializeTodoTask} from '../../../../../../../models/serializeTodoTask';
import {TodoTask} from '../../../../../../../models/todoTask';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<TodoTask>(createTodoTaskFromDiscriminatorValue); },
    }
}
