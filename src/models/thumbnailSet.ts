import { type Entity } from './entity';
import { type Thumbnail } from './thumbnail';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ThumbnailSet extends Entity, Parsable {
    /**
     * A 1920x1920 scaled thumbnail.
     */
    large?: Thumbnail | undefined;
    /**
     * A 176x176 scaled thumbnail.
     */
    medium?: Thumbnail | undefined;
    /**
     * A 48x48 cropped thumbnail.
     */
    small?: Thumbnail | undefined;
    /**
     * A custom thumbnail image or the original image used to generate other thumbnails.
     */
    source?: Thumbnail | undefined;
}
