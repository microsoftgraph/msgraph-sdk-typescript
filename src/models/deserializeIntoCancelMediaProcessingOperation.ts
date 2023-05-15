import {CancelMediaProcessingOperation} from './cancelMediaProcessingOperation';
import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelMediaProcessingOperation(cancelMediaProcessingOperation: CancelMediaProcessingOperation | undefined = {} as CancelMediaProcessingOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(cancelMediaProcessingOperation),
    }
}
