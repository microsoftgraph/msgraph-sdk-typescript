import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReply extends Entity, Parsable {
    /**
     * The content of a comment reply.
     */
    content?: string | undefined;
    /**
     * Indicates the type for the comment reply.
     */
    contentType?: string | undefined;
}
