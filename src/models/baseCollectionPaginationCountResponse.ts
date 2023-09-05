import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface BaseCollectionPaginationCountResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataCount property
     */
    odataCount?: number | undefined;
    /**
     * The OdataNextLink property
     */
    odataNextLink?: string | undefined;
}
