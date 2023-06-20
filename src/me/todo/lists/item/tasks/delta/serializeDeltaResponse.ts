import {serializeBaseDeltaFunctionResponse} from '../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeTodoTask} from '../../../../../../models/serializeTodoTask';
import {TodoTask} from '../../../../../../models/todoTask';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse, writer: SerializationWriter) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<TodoTask>("value", deltaResponse.value, serializeTodoTask);
}
