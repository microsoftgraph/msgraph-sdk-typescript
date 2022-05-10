import {UpdateRecordingStatusRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateRecordingStatusRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateRecordingStatusRequestBodyImpl();
}
