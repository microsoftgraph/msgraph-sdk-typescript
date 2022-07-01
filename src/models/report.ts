import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Report extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Report content; details vary by report type. */
    content?: string | undefined;
}
