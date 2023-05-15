import {serializeEntity} from './serializeEntity';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentReply(writer: SerializationWriter, workbookCommentReply: WorkbookCommentReply | undefined = {} as WorkbookCommentReply) : void {
        serializeEntity(writer, workbookCommentReply)
        writer.writeStringValue("content", workbookCommentReply.content);
        writer.writeStringValue("contentType", workbookCommentReply.contentType);
}
