import {CreateReplyAllResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyAllResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyAllResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyAllResponseMember1();
}
