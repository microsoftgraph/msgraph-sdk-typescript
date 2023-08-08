import {WindowsInformationProtectionPoliciesRequestBuilderGetQueryParameters} from './windowsInformationProtectionPoliciesRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WindowsInformationProtectionPoliciesRequestBuilderGetQueryParameters | undefined;
}
