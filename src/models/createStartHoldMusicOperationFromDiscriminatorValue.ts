import {StartHoldMusicOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : StartHoldMusicOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StartHoldMusicOperationImpl();
}
