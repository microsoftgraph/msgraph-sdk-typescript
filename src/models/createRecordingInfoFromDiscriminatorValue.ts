import { deserializeIntoRecordingInfo } from './deserializeIntoRecordingInfo';
import { type RecordingInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRecordingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecordingInfo;
}
