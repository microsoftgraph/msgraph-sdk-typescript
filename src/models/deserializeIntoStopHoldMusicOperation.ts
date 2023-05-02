import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {StopHoldMusicOperation} from './stopHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStopHoldMusicOperation(stopHoldMusicOperation: StopHoldMusicOperation | undefined = {} as StopHoldMusicOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(stopHoldMusicOperation),
    }
}
