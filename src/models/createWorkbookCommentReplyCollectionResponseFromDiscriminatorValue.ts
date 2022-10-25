import {WorkbookCommentReplyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentReplyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkbookCommentReplyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkbookCommentReplyCollectionResponse();
}
