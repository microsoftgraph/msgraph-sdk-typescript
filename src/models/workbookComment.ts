import {Entity} from './entity';
import {WorkbookCommentReply} from './workbookCommentReply';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookComment extends Entity, Partial<Parsable> {
    /** The content of the comment. */
    content?: string | undefined;
    /** Indicates the type for the comment. */
    contentType?: string | undefined;
    /** Read-only. Nullable. */
    replies?: WorkbookCommentReply[] | undefined;
}
