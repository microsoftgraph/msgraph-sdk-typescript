import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type WorkbookCommentReply } from './workbookCommentReply';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReplyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkbookCommentReply[] | undefined;
}
