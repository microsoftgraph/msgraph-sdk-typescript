import {StopHoldMusicPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StopHoldMusicPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StopHoldMusicPostRequestBodyImpl();
}
