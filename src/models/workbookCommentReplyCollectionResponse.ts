import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReplyCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: WorkbookCommentReply[] | undefined;
}
