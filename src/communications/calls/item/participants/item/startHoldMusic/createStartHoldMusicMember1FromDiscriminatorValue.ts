import {StartHoldMusicMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStartHoldMusicMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : StartHoldMusicMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StartHoldMusicMember1();
}
