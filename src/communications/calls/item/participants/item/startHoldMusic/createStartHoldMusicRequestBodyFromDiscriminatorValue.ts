import {StartHoldMusicRequestBody} from './startHoldMusicRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StartHoldMusicRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StartHoldMusicRequestBody();
}
