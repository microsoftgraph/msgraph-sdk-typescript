import {StartHoldMusicResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : StartHoldMusicResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StartHoldMusicResponseMember1();
}
