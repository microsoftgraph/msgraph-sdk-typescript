import { deserializeIntoStartHoldMusicOperation } from './deserializeIntoStartHoldMusicOperation';
import { type StartHoldMusicOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createStartHoldMusicOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoStartHoldMusicOperation;
}
