import { type ApiConnectorConfigurationRequestBuilderGetQueryParameters } from './apiConnectorConfigurationRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ApiConnectorConfigurationRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ApiConnectorConfigurationRequestBuilderGetQueryParameters | undefined;
}
