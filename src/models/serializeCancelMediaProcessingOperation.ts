import {CancelMediaProcessingOperation} from './cancelMediaProcessingOperation';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingOperation(cancelMediaProcessingOperation: CancelMediaProcessingOperation | undefined = {} as CancelMediaProcessingOperation, writer: SerializationWriter) : void {
        serializeCommsOperation(writer, cancelMediaProcessingOperation)
}
