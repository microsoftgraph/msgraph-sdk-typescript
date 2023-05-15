import {RecordingStatus} from '../../../../models/recordingStatus';
import {UpdateRecordingStatusPostRequestBody} from './updateRecordingStatusPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateRecordingStatusPostRequestBody(writer: SerializationWriter, updateRecordingStatusPostRequestBody: UpdateRecordingStatusPostRequestBody | undefined = {} as UpdateRecordingStatusPostRequestBody) : void {
        writer.writeStringValue("clientContext", updateRecordingStatusPostRequestBody.clientContext);
        writer.writeEnumValue<RecordingStatus>("status", updateRecordingStatusPostRequestBody.status);
        writer.writeAdditionalData(updateRecordingStatusPostRequestBody.additionalData);
}
