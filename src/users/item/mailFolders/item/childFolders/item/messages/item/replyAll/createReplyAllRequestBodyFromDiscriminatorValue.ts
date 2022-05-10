import {ReplyAllRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReplyAllRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReplyAllRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReplyAllRequestBodyImpl();
}
