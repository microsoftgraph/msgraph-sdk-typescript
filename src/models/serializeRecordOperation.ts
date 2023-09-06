import { type RecordOperation } from './recordOperation';
import { serializeCommsOperation } from './serializeCommsOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRecordOperation(writer: SerializationWriter, recordOperation: RecordOperation | undefined = {} as RecordOperation) : void {
        serializeCommsOperation(writer, recordOperation)
        writer.writeStringValue("recordingAccessToken", recordOperation.recordingAccessToken);
        writer.writeStringValue("recordingLocation", recordOperation.recordingLocation);
}
