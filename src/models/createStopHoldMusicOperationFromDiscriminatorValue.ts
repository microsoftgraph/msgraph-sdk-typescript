import { deserializeIntoStopHoldMusicOperation } from './deserializeIntoStopHoldMusicOperation';
import { type StopHoldMusicOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStopHoldMusicOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStopHoldMusicOperation;
}
