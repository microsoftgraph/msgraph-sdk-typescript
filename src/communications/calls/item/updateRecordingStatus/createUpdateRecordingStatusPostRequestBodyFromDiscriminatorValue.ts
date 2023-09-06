import { deserializeIntoUpdateRecordingStatusPostRequestBody } from './deserializeIntoUpdateRecordingStatusPostRequestBody';
import { type UpdateRecordingStatusPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateRecordingStatusPostRequestBody;
}
