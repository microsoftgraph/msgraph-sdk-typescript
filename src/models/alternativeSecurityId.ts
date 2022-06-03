import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlternativeSecurityId extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** For internal use only */
    identityProvider?: string | undefined;
    /** For internal use only */
    key?: string | undefined;
    /** For internal use only */
    type?: number | undefined;
}
