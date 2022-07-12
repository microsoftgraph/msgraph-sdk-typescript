import {MuteResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMuteResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : MuteResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MuteResponseMember1();
}
