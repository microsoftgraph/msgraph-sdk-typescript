import {SecureScoreControlProfilesRequestBuilderGetQueryParameters} from './secureScoreControlProfilesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SecureScoreControlProfilesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SecureScoreControlProfilesRequestBuilderGetQueryParameters | undefined;
}
