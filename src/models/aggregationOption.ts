import { type BucketAggregationDefinition } from './bucketAggregationDefinition';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AggregationOption extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The bucketDefinition property
     */
    bucketDefinition?: BucketAggregationDefinition | undefined;
    /**
     * Computes aggregation on the field while the field exists in current entity type. Required.
     */
    field?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The number of searchBucket resources to be returned. This is not required when the range is provided manually in the search request. Optional.
     */
    size?: number | undefined;
}
