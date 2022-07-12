import {CreateReplyMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyMember1();
}
