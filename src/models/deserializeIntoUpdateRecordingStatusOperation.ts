import { deserializeIntoCommsOperation } from './deserializeIntoCommsOperation';
import { type UpdateRecordingStatusOperation } from './updateRecordingStatusOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateRecordingStatusOperation(updateRecordingStatusOperation: UpdateRecordingStatusOperation | undefined = {} as UpdateRecordingStatusOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(updateRecordingStatusOperation),
    }
}
