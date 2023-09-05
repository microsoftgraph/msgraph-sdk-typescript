import { deserializeIntoCommsOperation } from './deserializeIntoCommsOperation';
import { type SubscribeToToneOperation } from './subscribeToToneOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribeToToneOperation(subscribeToToneOperation: SubscribeToToneOperation | undefined = {} as SubscribeToToneOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(subscribeToToneOperation),
    }
}
