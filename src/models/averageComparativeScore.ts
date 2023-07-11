import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AverageComparativeScore extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Average score within specified basis.
     */
    averageScore?: number | undefined;
    /**
     * Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
     */
    basis?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
