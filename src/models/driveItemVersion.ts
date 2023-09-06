import { type BaseItemVersion } from './baseItemVersion';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DriveItemVersion extends BaseItemVersion, Parsable {
    /**
     * The content stream for this version of the item.
     */
    content?: string | undefined;
    /**
     * Indicates the size of the content stream for this version of the item.
     */
    size?: number | undefined;
}
