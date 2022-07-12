import {CreateReplyAllMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateReplyAllMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateReplyAllMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateReplyAllMember1();
}
