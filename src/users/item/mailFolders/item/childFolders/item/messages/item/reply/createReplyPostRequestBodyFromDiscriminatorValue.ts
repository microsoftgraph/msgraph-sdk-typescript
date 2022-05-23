import {ReplyPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyPostRequestBodyImpl();
}
