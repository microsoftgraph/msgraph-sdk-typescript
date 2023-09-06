import { createWorkbookCommentReplyFromDiscriminatorValue } from './createWorkbookCommentReplyFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookCommentReply } from './serializeWorkbookCommentReply';
import { type WorkbookComment } from './workbookComment';
import { type WorkbookCommentReply } from './workbookCommentReply';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookComment(workbookComment: WorkbookComment | undefined = {} as WorkbookComment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookComment),
        "content": n => { workbookComment.content = n.getStringValue(); },
        "contentType": n => { workbookComment.contentType = n.getStringValue(); },
        "replies": n => { workbookComment.replies = n.getCollectionOfObjectValues<WorkbookCommentReply>(createWorkbookCommentReplyFromDiscriminatorValue); },
    }
}
