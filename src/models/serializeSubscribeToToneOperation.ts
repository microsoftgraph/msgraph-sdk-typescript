import { serializeCommsOperation } from './serializeCommsOperation';
import { type SubscribeToToneOperation } from './subscribeToToneOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSubscribeToToneOperation(writer: SerializationWriter, subscribeToToneOperation: SubscribeToToneOperation | undefined = {} as SubscribeToToneOperation) : void {
        serializeCommsOperation(writer, subscribeToToneOperation)
}
