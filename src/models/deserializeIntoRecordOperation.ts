import { deserializeIntoCommsOperation } from './deserializeIntoCommsOperation';
import { type RecordOperation } from './recordOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRecordOperation(recordOperation: RecordOperation | undefined = {} as RecordOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(recordOperation),
        "recordingAccessToken": n => { recordOperation.recordingAccessToken = n.getStringValue(); },
        "recordingLocation": n => { recordOperation.recordingLocation = n.getStringValue(); },
    }
}
