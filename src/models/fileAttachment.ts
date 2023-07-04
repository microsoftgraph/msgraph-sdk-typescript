import {Attachment} from './attachment';
import {Parsable} from '@microsoft/kiota-abstractions';

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
     * Do not use this property as it is not supported.
     */
    contentLocation?: string | undefined;
}
