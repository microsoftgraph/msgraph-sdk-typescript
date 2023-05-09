import {serializeCommsOperation} from './serializeCommsOperation';
import {UpdateRecordingStatusOperation} from './updateRecordingStatusOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateRecordingStatusOperation(writer: SerializationWriter, updateRecordingStatusOperation: UpdateRecordingStatusOperation | undefined = {} as UpdateRecordingStatusOperation) : void {
        serializeCommsOperation(writer, updateRecordingStatusOperation)
}
