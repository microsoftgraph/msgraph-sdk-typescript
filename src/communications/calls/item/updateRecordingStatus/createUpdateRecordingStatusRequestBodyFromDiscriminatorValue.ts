import {UpdateRecordingStatusRequestBody} from './updateRecordingStatusRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateRecordingStatusRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateRecordingStatusRequestBody();
}
