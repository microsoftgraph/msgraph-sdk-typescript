import {StopHoldMusicOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : StopHoldMusicOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StopHoldMusicOperationImpl();
}
