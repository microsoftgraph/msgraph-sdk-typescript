import {serializeCommsOperation} from './serializeCommsOperation';
import {SubscribeToToneOperation} from './subscribeToToneOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribeToToneOperation(writer: SerializationWriter, subscribeToToneOperation: SubscribeToToneOperation | undefined = {} as SubscribeToToneOperation) : void {
        serializeCommsOperation(writer, subscribeToToneOperation)
}
