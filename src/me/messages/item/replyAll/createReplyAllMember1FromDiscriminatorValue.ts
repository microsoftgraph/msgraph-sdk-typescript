import {ReplyAllMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyAllMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyAllMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyAllMember1();
}
