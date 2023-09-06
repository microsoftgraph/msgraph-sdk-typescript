import { type MdmWindowsInformationProtectionPoliciesRequestBuilderGetQueryParameters } from './mdmWindowsInformationProtectionPoliciesRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MdmWindowsInformationProtectionPoliciesRequestBuilderGetQueryParameters | undefined;
}
