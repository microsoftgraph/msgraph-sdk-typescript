import {StopHoldMusicPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StopHoldMusicPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StopHoldMusicPostRequestBody();
}
