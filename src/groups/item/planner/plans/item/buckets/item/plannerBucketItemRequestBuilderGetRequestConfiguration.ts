import {PlannerBucketItemRequestBuilderGetQueryParameters} from './plannerBucketItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface PlannerBucketItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: PlannerBucketItemRequestBuilderGetQueryParameters | undefined;
}
