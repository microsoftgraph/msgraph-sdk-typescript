import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface WipePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The keepEnrollmentData property
     */
    keepEnrollmentData?: boolean | undefined;
    /**
     * The keepUserData property
     */
    keepUserData?: boolean | undefined;
    /**
     * The macOsUnlockCode property
     */
    macOsUnlockCode?: string | undefined;
    /**
     * The persistEsimDataPlan property
     */
    persistEsimDataPlan?: boolean | undefined;
}
