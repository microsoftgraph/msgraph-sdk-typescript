import { type Attachment } from './attachment';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface FileAttachment extends Attachment, Parsable {
    /**
     * The base64-encoded contents of the file.
     */
    contentBytes?: string | undefined;
    /**
     * The ID of the attachment in the Exchange store.
     */
    contentId?: string | undefined;
    /**
     * Don't use this property as it isn't supported.
     */
    contentLocation?: string | undefined;
}
