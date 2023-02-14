import {StartHoldMusicPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StartHoldMusicPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StartHoldMusicPostRequestBody();
}
