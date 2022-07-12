import {FollowResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFollowResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : FollowResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FollowResponseMember1();
}
