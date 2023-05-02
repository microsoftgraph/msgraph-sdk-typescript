import {RecordingStatus} from '../../../../models/recordingStatus';
import {UpdateRecordingStatusPostRequestBody} from './updateRecordingStatusPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateRecordingStatusPostRequestBody(updateRecordingStatusPostRequestBody: UpdateRecordingStatusPostRequestBody | undefined = {} as UpdateRecordingStatusPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { updateRecordingStatusPostRequestBody.clientContext = n.getStringValue(); },
        "status": n => { updateRecordingStatusPostRequestBody.status = n.getEnumValue<RecordingStatus>(RecordingStatus); },
    }
}
