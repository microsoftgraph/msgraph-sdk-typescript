import {deserializeIntoRecordingInfo} from './deserializeIntoRecordingInfo';
import {RecordingInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRecordingInfo;
}
