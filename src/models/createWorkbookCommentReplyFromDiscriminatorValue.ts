import { deserializeIntoWorkbookCommentReply } from './deserializeIntoWorkbookCommentReply';
import { type WorkbookCommentReply } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookCommentReplyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookCommentReply;
}
