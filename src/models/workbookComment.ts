import {Entity} from './entity';
import {WorkbookCommentReply} from './workbookCommentReply';

export interface WorkbookComment extends Entity{
    /** The content of the comment. */
    content?:string | undefined;
    /** Indicates the type for the comment. */
    contentType?:string | undefined;
    /** Read-only. Nullable. */
    replies?:WorkbookCommentReply[] | undefined;
}
