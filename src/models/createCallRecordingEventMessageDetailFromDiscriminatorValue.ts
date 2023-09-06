import { deserializeIntoCallRecordingEventMessageDetail } from './deserializeIntoCallRecordingEventMessageDetail';
import { type CallRecordingEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCallRecordingEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallRecordingEventMessageDetail;
}
