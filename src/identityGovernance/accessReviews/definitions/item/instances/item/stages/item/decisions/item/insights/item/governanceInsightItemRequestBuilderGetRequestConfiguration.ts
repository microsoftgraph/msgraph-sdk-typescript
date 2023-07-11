import {GovernanceInsightItemRequestBuilderGetQueryParameters} from './governanceInsightItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GovernanceInsightItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: GovernanceInsightItemRequestBuilderGetQueryParameters | undefined;
}
