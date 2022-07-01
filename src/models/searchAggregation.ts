import {SearchBucket} from './searchBucket';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchAggregation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Defines the actual buckets of the computed aggregation. */
    buckets?: SearchBucket[] | undefined;
    /** Defines on which field the aggregation was computed on. */
    field?: string | undefined;
}
