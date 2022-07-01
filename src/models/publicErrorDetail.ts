import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PublicErrorDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The error code. */
    code?: string | undefined;
    /** The error message. */
    message?: string | undefined;
    /** The target of the error. */
    target?: string | undefined;
}
