import {WorkbookCommentReplyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentReplyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookCommentReplyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookCommentReplyImpl();
}
