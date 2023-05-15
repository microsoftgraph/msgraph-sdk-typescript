import {deserializeIntoStartHoldMusicOperation} from './deserializeIntoStartHoldMusicOperation';
import {StartHoldMusicOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStartHoldMusicOperation;
}
