import {deserializeIntoStopHoldMusicOperation} from './deserializeIntoStopHoldMusicOperation';
import {StopHoldMusicOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStopHoldMusicOperation;
}
