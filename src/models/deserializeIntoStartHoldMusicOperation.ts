import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import type {StartHoldMusicOperation} from './startHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStartHoldMusicOperation(startHoldMusicOperation: StartHoldMusicOperation | undefined = {} as StartHoldMusicOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(startHoldMusicOperation),
    }
}
