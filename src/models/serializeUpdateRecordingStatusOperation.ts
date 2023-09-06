import { serializeCommsOperation } from './serializeCommsOperation';
import { type UpdateRecordingStatusOperation } from './updateRecordingStatusOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUpdateRecordingStatusOperation(writer: SerializationWriter, updateRecordingStatusOperation: UpdateRecordingStatusOperation | undefined = {} as UpdateRecordingStatusOperation) : void {
        serializeCommsOperation(writer, updateRecordingStatusOperation)
}
