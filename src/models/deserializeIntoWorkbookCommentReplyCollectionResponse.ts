import {createWorkbookCommentReplyFromDiscriminatorValue} from './createWorkbookCommentReplyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWorkbookCommentReply} from './serializeWorkbookCommentReply';
import type {WorkbookCommentReply} from './workbookCommentReply';
import type {WorkbookCommentReplyCollectionResponse} from './workbookCommentReplyCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookCommentReplyCollectionResponse(workbookCommentReplyCollectionResponse: WorkbookCommentReplyCollectionResponse | undefined = {} as WorkbookCommentReplyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workbookCommentReplyCollectionResponse),
        "value": n => { workbookCommentReplyCollectionResponse.value = n.getCollectionOfObjectValues<WorkbookCommentReply>(createWorkbookCommentReplyFromDiscriminatorValue); },
    }
}
