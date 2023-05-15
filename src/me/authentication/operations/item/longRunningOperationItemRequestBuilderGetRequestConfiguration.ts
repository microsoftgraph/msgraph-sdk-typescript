import {LongRunningOperationItemRequestBuilderGetQueryParameters} from './longRunningOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LongRunningOperationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: LongRunningOperationItemRequestBuilderGetQueryParameters | undefined;
}
