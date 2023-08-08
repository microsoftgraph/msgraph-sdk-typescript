import type {Entity} from './entity';
import type {WorkbookCommentReply} from './workbookCommentReply';
import type {Parsable} from '@microsoft/kiota-abstractions';

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
