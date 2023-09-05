import { type CancelMediaProcessingOperation } from './cancelMediaProcessingOperation';
import { serializeCommsOperation } from './serializeCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingOperation(writer: SerializationWriter, cancelMediaProcessingOperation: CancelMediaProcessingOperation | undefined = {} as CancelMediaProcessingOperation) : void {
        serializeCommsOperation(writer, cancelMediaProcessingOperation)
}
