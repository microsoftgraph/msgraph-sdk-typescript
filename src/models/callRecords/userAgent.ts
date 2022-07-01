import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserAgent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Identifies the version of application software used by this endpoint. */
    applicationVersion?: string | undefined;
    /** User-agent header value reported by this endpoint. */
    headerValue?: string | undefined;
}
