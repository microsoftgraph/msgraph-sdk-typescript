import {RecordingStatus} from '../../../../models/recordingStatus';
import type {UpdateRecordingStatusPostRequestBody} from './updateRecordingStatusPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateRecordingStatusPostRequestBody(updateRecordingStatusPostRequestBody: UpdateRecordingStatusPostRequestBody | undefined = {} as UpdateRecordingStatusPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { updateRecordingStatusPostRequestBody.clientContext = n.getStringValue(); },
        "status": n => { updateRecordingStatusPostRequestBody.status = n.getEnumValue<RecordingStatus>(RecordingStatus); },
    }
}
