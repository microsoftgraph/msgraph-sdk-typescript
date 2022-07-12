import {UpdateRecordingStatusResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateRecordingStatusResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateRecordingStatusResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateRecordingStatusResponseMember1();
}
