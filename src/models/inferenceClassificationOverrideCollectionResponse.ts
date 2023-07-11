import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceClassificationOverrideCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: InferenceClassificationOverride[] | undefined;
}
