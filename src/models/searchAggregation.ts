import type {SearchBucket} from './searchBucket';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchAggregation extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The buckets property
     */
    buckets?: SearchBucket[] | undefined;
    /**
     * The field property
     */
    field?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
