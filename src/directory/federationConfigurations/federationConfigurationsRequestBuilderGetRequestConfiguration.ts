import {FederationConfigurationsRequestBuilderGetQueryParameters} from './federationConfigurationsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface FederationConfigurationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FederationConfigurationsRequestBuilderGetQueryParameters | undefined;
}
