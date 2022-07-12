import {StopHoldMusicResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStopHoldMusicResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : StopHoldMusicResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StopHoldMusicResponseMember1();
}
