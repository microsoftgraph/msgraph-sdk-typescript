import { type CancelMediaProcessingOperation } from './cancelMediaProcessingOperation';
import { deserializeIntoCommsOperation } from './deserializeIntoCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelMediaProcessingOperation(cancelMediaProcessingOperation: CancelMediaProcessingOperation | undefined = {} as CancelMediaProcessingOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(cancelMediaProcessingOperation),
    }
}
