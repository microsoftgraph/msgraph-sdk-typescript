import {Entity} from './entity';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookComment extends Entity, Parsable {
    /**
     * The content of comment.
     */
    content?: string | undefined;
    /**
     * Indicates the type for the comment.
     */
    contentType?: string | undefined;
    /**
     * The replies property
     */
    replies?: WorkbookCommentReply[] | undefined;
}
