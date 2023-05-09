import {ReviewSetsRequestBuilderGetQueryParameters} from './reviewSetsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ReviewSetsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ReviewSetsRequestBuilderGetQueryParameters | undefined;
}
