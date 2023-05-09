import {deserializeIntoWorkbookCommentReplyCollectionResponse} from './deserializeIntoWorkbookCommentReplyCollectionResponse';
import {WorkbookCommentReplyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkbookCommentReplyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkbookCommentReplyCollectionResponse;
}
