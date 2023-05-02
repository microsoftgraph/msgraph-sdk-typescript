import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookCommentReply(workbookCommentReply: WorkbookCommentReply | undefined = {} as WorkbookCommentReply) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookCommentReply),
        "content": n => { workbookCommentReply.content = n.getStringValue(); },
        "contentType": n => { workbookCommentReply.contentType = n.getStringValue(); },
    }
}
