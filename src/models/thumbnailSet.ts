import {Entity} from './entity';
import {Thumbnail} from './thumbnail';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ThumbnailSet extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A 1920x1920 scaled thumbnail. */
    large?: Thumbnail | undefined;
    /** A 176x176 scaled thumbnail. */
    medium?: Thumbnail | undefined;
    /** A 48x48 cropped thumbnail. */
    small?: Thumbnail | undefined;
    /** A custom thumbnail image or the original image used to generate other thumbnails. */
    source?: Thumbnail | undefined;
}
