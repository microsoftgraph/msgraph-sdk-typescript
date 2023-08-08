import {DeploymentSummaryRequestBuilderGetQueryParameters} from './deploymentSummaryRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

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
