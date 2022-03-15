import {UpdateRecordingStatusOperation} from './updateRecordingStatusOperation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateRecordingStatusOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateRecordingStatusOperation();
}
