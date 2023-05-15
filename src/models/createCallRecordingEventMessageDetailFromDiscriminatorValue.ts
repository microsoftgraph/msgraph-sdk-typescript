import {deserializeIntoCallRecordingEventMessageDetail} from './deserializeIntoCallRecordingEventMessageDetail';
import {CallRecordingEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRecordingEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallRecordingEventMessageDetail;
}
