import {Entity} from './entity';

export interface WorkbookCommentReply extends Entity{
    /** The content of replied comment. */
    content?:string | undefined;
    /** Indicates the type for the replied comment. */
    contentType?:string | undefined;
}
