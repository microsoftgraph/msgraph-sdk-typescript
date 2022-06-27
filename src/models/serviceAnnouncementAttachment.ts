import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementAttachment extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attachment content. */
    content?: string | undefined;
    /** The contentType property */
    contentType?: string | undefined;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date | undefined;
    /** The name property */
    name?: string | undefined;
    /** The size property */
    size?: number | undefined;
}
