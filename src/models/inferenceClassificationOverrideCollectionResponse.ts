import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceClassificationOverrideCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: InferenceClassificationOverride[] | undefined;
}
