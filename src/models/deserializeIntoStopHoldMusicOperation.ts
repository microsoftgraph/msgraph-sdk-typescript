import { deserializeIntoCommsOperation } from './deserializeIntoCommsOperation';
import { type StopHoldMusicOperation } from './stopHoldMusicOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStopHoldMusicOperation(stopHoldMusicOperation: StopHoldMusicOperation | undefined = {} as StopHoldMusicOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(stopHoldMusicOperation),
    }
}
