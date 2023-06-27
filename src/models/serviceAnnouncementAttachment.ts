import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementAttachment extends Entity, Parsable {
    /**
     * The attachment content.
     */
    content?: string | undefined;
    /**
     * The contentType property
     */
    contentType?: string | undefined;
    /**
     * The lastModifiedDateTime property
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The size property
     */
    size?: number | undefined;
}
