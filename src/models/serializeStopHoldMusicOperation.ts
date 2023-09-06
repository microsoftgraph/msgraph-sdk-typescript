import { serializeCommsOperation } from './serializeCommsOperation';
import { type StopHoldMusicOperation } from './stopHoldMusicOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeStopHoldMusicOperation(writer: SerializationWriter, stopHoldMusicOperation: StopHoldMusicOperation | undefined = {} as StopHoldMusicOperation) : void {
        serializeCommsOperation(writer, stopHoldMusicOperation)
}
