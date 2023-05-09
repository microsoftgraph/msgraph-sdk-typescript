import {serializeCommsOperation} from './serializeCommsOperation';
import {StopHoldMusicOperation} from './stopHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStopHoldMusicOperation(writer: SerializationWriter, stopHoldMusicOperation: StopHoldMusicOperation | undefined = {} as StopHoldMusicOperation) : void {
        serializeCommsOperation(writer, stopHoldMusicOperation)
}
