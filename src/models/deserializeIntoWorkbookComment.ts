import {createWorkbookCommentReplyFromDiscriminatorValue} from './createWorkbookCommentReplyFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookCommentReply} from './serializeWorkbookCommentReply';
import {WorkbookComment} from './workbookComment';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookComment(workbookComment: WorkbookComment | undefined = {} as WorkbookComment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookComment),
        "content": n => { workbookComment.content = n.getStringValue(); },
        "contentType": n => { workbookComment.contentType = n.getStringValue(); },
        "replies": n => { workbookComment.replies = n.getCollectionOfObjectValues<WorkbookCommentReply>(createWorkbookCommentReplyFromDiscriminatorValue); },
    }
}
