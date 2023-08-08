import {serializeEntity} from './serializeEntity';
import {serializeWorkbookCommentReply} from './serializeWorkbookCommentReply';
import type {WorkbookComment} from './workbookComment';
import type {WorkbookCommentReply} from './workbookCommentReply';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookComment(writer: SerializationWriter, workbookComment: WorkbookComment | undefined = {} as WorkbookComment) : void {
        serializeEntity(writer, workbookComment)
        writer.writeStringValue("content", workbookComment.content);
        writer.writeStringValue("contentType", workbookComment.contentType);
        writer.writeCollectionOfObjectValues<WorkbookCommentReply>("replies", workbookComment.replies, serializeWorkbookCommentReply);
}
