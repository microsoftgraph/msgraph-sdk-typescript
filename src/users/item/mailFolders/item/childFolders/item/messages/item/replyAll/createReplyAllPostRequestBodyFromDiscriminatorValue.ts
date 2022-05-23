import {ReplyAllPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyAllPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyAllPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyAllPostRequestBodyImpl();
}
