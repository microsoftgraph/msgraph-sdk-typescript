import {TeamsAsyncOperationItemRequestBuilderGetQueryParameters} from './teamsAsyncOperationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface TeamsAsyncOperationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: TeamsAsyncOperationItemRequestBuilderGetQueryParameters | undefined;
}
