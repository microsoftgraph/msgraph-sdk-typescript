import {ServicePrincipalRiskDetectionsRequestBuilderGetQueryParameters} from './servicePrincipalRiskDetectionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalRiskDetectionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServicePrincipalRiskDetectionsRequestBuilderGetQueryParameters | undefined;
}
