import {RecordOperation} from './recordOperation';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecordOperation(writer: SerializationWriter, recordOperation: RecordOperation | undefined = {} as RecordOperation) : void {
        serializeCommsOperation(writer, recordOperation)
        writer.writeStringValue("recordingAccessToken", recordOperation.recordingAccessToken);
        writer.writeStringValue("recordingLocation", recordOperation.recordingLocation);
}
