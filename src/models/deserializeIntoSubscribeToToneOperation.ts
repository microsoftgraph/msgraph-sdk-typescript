import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {SubscribeToToneOperation} from './subscribeToToneOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribeToToneOperation(subscribeToToneOperation: SubscribeToToneOperation | undefined = {} as SubscribeToToneOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(subscribeToToneOperation),
    }
}
