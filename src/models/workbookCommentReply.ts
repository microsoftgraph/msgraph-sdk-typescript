import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReply extends Entity, Partial<Parsable> {
    /** The content of replied comment. */
    content?: string | undefined;
    /** Indicates the type for the replied comment. */
    contentType?: string | undefined;
}
