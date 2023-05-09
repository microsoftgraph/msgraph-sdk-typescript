import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWorkbookCommentReply} from './serializeWorkbookCommentReply';
import {WorkbookCommentReply} from './workbookCommentReply';
import {WorkbookCommentReplyCollectionResponse} from './workbookCommentReplyCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookCommentReplyCollectionResponse(writer: SerializationWriter, workbookCommentReplyCollectionResponse: WorkbookCommentReplyCollectionResponse | undefined = {} as WorkbookCommentReplyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workbookCommentReplyCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkbookCommentReply>("value", workbookCommentReplyCollectionResponse.value, serializeWorkbookCommentReply);
}
