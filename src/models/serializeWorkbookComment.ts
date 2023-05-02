import {serializeEntity} from './serializeEntity';
import {serializeWorkbookCommentReply} from './serializeWorkbookCommentReply';
import {WorkbookComment} from './workbookComment';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookComment(writer: SerializationWriter, workbookComment: WorkbookComment | undefined = {} as WorkbookComment) : void {
        serializeEntity(writer, workbookComment)
        writer.writeStringValue("content", workbookComment.content);
        writer.writeStringValue("contentType", workbookComment.contentType);
        writer.writeCollectionOfObjectValues<WorkbookCommentReply>("replies", workbookComment.replies, serializeWorkbookCommentReply);
}
