import {AttachmentBase} from './attachmentBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskFileAttachment extends AttachmentBase, Parsable {
    /**
     * The base64-encoded contents of the file.
     */
    contentBytes?: string | undefined;
}
