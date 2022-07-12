import {ReplyMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyMember1();
}
