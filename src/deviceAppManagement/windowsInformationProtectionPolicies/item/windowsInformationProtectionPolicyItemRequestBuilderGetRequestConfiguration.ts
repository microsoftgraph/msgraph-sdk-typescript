import { type WindowsInformationProtectionPolicyItemRequestBuilderGetQueryParameters } from './windowsInformationProtectionPolicyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WindowsInformationProtectionPolicyItemRequestBuilderGetQueryParameters | undefined;
}
