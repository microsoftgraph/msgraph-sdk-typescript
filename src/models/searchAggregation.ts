import {SearchBucket} from './searchBucket';

export interface SearchAggregation{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Defines the actual buckets of the computed aggregation. */
    buckets?:SearchBucket[] | undefined;
    /** Defines on which field the aggregation was computed on. */
    field?:string | undefined;
}
