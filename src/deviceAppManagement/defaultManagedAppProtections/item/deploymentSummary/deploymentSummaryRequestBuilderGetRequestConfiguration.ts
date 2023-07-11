import {DeploymentSummaryRequestBuilderGetQueryParameters} from './deploymentSummaryRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeploymentSummaryRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeploymentSummaryRequestBuilderGetQueryParameters | undefined;
}
