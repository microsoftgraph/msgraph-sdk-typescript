import {StartHoldMusicPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : StartHoldMusicPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StartHoldMusicPostRequestBodyImpl();
}
