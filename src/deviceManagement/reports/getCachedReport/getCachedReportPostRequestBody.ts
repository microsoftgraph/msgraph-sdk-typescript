import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetCachedReportPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The groupBy property */
    groupBy?: string[] | undefined;
    /** The id property */
    id?: string | undefined;
    /** The orderBy property */
    orderBy?: string[] | undefined;
    /** The search property */
    search?: string | undefined;
    /** The select property */
    select?: string[] | undefined;
    /** The skip property */
    skip?: number | undefined;
    /** The top property */
    top?: number | undefined;
}
