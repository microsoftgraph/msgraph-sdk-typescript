import {serializeCommsOperation} from './serializeCommsOperation';
import {StartHoldMusicOperation} from './startHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStartHoldMusicOperation(writer: SerializationWriter, startHoldMusicOperation: StartHoldMusicOperation | undefined = {} as StartHoldMusicOperation) : void {
        serializeCommsOperation(writer, startHoldMusicOperation)
}
