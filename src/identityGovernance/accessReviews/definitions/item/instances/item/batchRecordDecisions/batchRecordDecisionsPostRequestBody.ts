import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BatchRecordDecisionsPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The decision property
     */
    decision?: string | undefined;
    /**
     * The justification property
     */
    justification?: string | undefined;
    /**
     * The principalId property
     */
    principalId?: string | undefined;
    /**
     * The resourceId property
     */
    resourceId?: string | undefined;
}
