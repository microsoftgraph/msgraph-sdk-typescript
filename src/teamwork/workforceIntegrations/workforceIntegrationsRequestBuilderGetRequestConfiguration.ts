import {WorkforceIntegrationsRequestBuilderGetQueryParameters} from './workforceIntegrationsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface WorkforceIntegrationsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WorkforceIntegrationsRequestBuilderGetQueryParameters | undefined;
}
