import {deserializeIntoWorkbookCommentReply} from './deserializeIntoWorkbookCommentReply';
import {WorkbookCommentReply} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentReplyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookCommentReply;
}
