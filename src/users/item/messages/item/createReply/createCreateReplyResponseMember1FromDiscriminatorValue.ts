import {CreateReplyResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyResponseMember1();
}
