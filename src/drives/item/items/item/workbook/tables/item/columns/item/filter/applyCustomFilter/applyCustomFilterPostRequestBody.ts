import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface ApplyCustomFilterPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The criteria1 property
     */
    criteria1?: string | undefined;
    /**
     * The criteria2 property
     */
    criteria2?: string | undefined;
    /**
     * The oper property
     */
    oper?: string | undefined;
}
