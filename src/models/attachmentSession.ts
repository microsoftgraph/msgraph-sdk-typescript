import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentSession extends Entity, Parsable {
    /**
     * The content streams that are uploaded.
     */
    content?: string | undefined;
    /**
     * The date and time in UTC when the upload session will expire. The complete file must be uploaded before this expiration time is reached.
     */
    expirationDateTime?: Date | undefined;
    /**
     * Indicates a single value {start} that represents the location in the file where the next upload should begin.
     */
    nextExpectedRanges?: string[] | undefined;
}
