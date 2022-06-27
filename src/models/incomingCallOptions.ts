import {CallOptions} from './callOptions';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IncomingCallOptions extends Partial<AdditionalDataHolder>, CallOptions, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
