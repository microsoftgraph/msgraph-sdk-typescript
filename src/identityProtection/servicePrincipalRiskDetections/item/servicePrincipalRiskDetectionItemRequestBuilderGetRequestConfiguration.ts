import { type ServicePrincipalRiskDetectionItemRequestBuilderGetQueryParameters } from './servicePrincipalRiskDetectionItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ServicePrincipalRiskDetectionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServicePrincipalRiskDetectionItemRequestBuilderGetQueryParameters | undefined;
}
