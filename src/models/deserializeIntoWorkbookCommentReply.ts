import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {WorkbookCommentReply} from './workbookCommentReply';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookCommentReply(workbookCommentReply: WorkbookCommentReply | undefined = {} as WorkbookCommentReply) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookCommentReply),
        "content": n => { workbookCommentReply.content = n.getStringValue(); },
        "contentType": n => { workbookCommentReply.contentType = n.getStringValue(); },
    }
}
