import {UserFlowLanguageConfigurationItemRequestBuilderGetQueryParameters} from './userFlowLanguageConfigurationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserFlowLanguageConfigurationItemRequestBuilderGetQueryParameters | undefined;
}
