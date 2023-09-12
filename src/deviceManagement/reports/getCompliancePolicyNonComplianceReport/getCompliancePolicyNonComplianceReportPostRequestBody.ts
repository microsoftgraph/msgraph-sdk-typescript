import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface GetCompliancePolicyNonComplianceReportPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The filter property
     */
    filter?: string | undefined;
    /**
     * The groupBy property
     */
    groupBy?: string[] | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The orderBy property
     */
    orderBy?: string[] | undefined;
    /**
     * The search property
     */
    search?: string | undefined;
    /**
     * The select property
     */
    select?: string[] | undefined;
    /**
     * The sessionId property
     */
    sessionId?: string | undefined;
    /**
     * The skip property
     */
    skip?: number | undefined;
    /**
     * The top property
     */
    top?: number | undefined;
}
