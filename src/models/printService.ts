import {Entity} from './entity';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintService extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Endpoints that can be used to access the service. Read-only. Nullable. */
    endpoints?: PrintServiceEndpoint[] | undefined;
}
