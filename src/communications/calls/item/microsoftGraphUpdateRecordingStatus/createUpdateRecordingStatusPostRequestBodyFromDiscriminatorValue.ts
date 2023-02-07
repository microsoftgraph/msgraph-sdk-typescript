import {UpdateRecordingStatusPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateRecordingStatusPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateRecordingStatusPostRequestBody();
}
