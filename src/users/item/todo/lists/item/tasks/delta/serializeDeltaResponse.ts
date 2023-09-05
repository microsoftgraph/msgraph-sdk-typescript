import { serializeBaseDeltaFunctionResponse } from '../../../../../../../models/serializeBaseDeltaFunctionResponse';
import { serializeTodoTask } from '../../../../../../../models/serializeTodoTask';
import { type TodoTask } from '../../../../../../../models/todoTask';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<TodoTask>("value", deltaResponse.value, serializeTodoTask);
}
