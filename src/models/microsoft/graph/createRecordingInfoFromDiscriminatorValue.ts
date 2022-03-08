import {RecordingInfo} from './recordingInfo';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecordingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecordingInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecordingInfo();
}
