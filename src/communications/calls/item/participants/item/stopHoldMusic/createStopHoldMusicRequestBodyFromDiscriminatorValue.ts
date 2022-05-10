import {StopHoldMusicRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StopHoldMusicRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StopHoldMusicRequestBodyImpl();
}
