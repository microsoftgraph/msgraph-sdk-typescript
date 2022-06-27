import {BaseItemVersion} from './baseItemVersion';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItemVersion extends Partial<AdditionalDataHolder>, BaseItemVersion, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The content property */
    content?: string | undefined;
    /** Indicates the size of the content stream for this version of the item. */
    size?: number | undefined;
}
