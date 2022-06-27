import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintDocument extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The document's content (MIME) type. Read-only. */
    contentType?: string | undefined;
    /** The document's name. Read-only. */
    displayName?: string | undefined;
    /** The document's size in bytes. Read-only. */
    size?: number | undefined;
}
