import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkHostedContent extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Write only. Bytes for the hosted content (such as images). */
    contentBytes?: string | undefined;
    /** Write only. Content type, such as image/png, image/jpg. */
    contentType?: string | undefined;
}
