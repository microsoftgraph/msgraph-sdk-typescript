import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {UpdateRecordingStatusOperation} from './updateRecordingStatusOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateRecordingStatusOperation(updateRecordingStatusOperation: UpdateRecordingStatusOperation | undefined = {} as UpdateRecordingStatusOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(updateRecordingStatusOperation),
    }
}
