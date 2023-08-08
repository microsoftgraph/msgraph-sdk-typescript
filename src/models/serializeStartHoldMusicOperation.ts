import {serializeCommsOperation} from './serializeCommsOperation';
import type {StartHoldMusicOperation} from './startHoldMusicOperation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStartHoldMusicOperation(writer: SerializationWriter, startHoldMusicOperation: StartHoldMusicOperation | undefined = {} as StartHoldMusicOperation) : void {
        serializeCommsOperation(writer, startHoldMusicOperation)
}
