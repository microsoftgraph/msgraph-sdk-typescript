import {BucketAggregationRange} from './bucketAggregationRange';
import {BucketAggregationSortProperty} from './bucketAggregationSortProperty';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BucketAggregationDefinition extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** True to specify the sort order as descending. The default is false, with the sort order as ascending. Optional. */
    isDescending?: boolean | undefined;
    /** The minimum number of items that should be present in the aggregation to be returned in a bucket. Optional. */
    minimumCount?: number | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** A filter to define a matching criteria. The key should start with the specified prefix to be returned in the response. Optional. */
    prefixFilter?: string | undefined;
    /** Specifies the manual ranges to compute the aggregations. This is only valid for non-string refiners of date or numeric type. Optional. */
    ranges?: BucketAggregationRange[] | undefined;
    /** The sortBy property */
    sortBy?: BucketAggregationSortProperty | undefined;
}
