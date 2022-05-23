import {UpdateRecordingStatusOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateRecordingStatusOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateRecordingStatusOperationImpl();
}
