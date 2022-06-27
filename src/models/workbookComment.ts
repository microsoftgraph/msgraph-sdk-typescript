import {Entity} from './entity';
import {WorkbookCommentReply} from './workbookCommentReply';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookComment extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The content of the comment. */
    content?: string | undefined;
    /** Indicates the type for the comment. */
    contentType?: string | undefined;
    /** The replies property */
    replies?: WorkbookCommentReply[] | undefined;
}
