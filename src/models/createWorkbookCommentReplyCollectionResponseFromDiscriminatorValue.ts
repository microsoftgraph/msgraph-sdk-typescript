import { deserializeIntoWorkbookCommentReplyCollectionResponse } from './deserializeIntoWorkbookCommentReplyCollectionResponse';
import { type WorkbookCommentReplyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkbookCommentReplyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookCommentReplyCollectionResponse;
}
