import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpoint extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A human-readable display name for the endpoint. */
    displayName?: string | undefined;
    /** The URI that can be used to access the service. */
    uri?: string | undefined;
}
