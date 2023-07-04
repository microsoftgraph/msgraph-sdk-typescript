import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProfilePhoto extends Entity, Parsable {
    /**
     * The height of the photo. Read-only.
     */
    height?: number | undefined;
    /**
     * The width of the photo. Read-only.
     */
    width?: number | undefined;
}
