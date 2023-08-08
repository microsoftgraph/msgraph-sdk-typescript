import {FederationConfigurationRequestBuilderGetQueryParameters} from './federationConfigurationRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface FederationConfigurationRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FederationConfigurationRequestBuilderGetQueryParameters | undefined;
}
