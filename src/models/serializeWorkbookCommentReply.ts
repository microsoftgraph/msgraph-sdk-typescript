import { serializeEntity } from './serializeEntity';
import { type WorkbookCommentReply } from './workbookCommentReply';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentReply(writer: SerializationWriter, workbookCommentReply: WorkbookCommentReply | undefined = {} as WorkbookCommentReply) : void {
        serializeEntity(writer, workbookCommentReply)
        writer.writeStringValue("content", workbookCommentReply.content);
        writer.writeStringValue("contentType", workbookCommentReply.contentType);
}
