import { type MdmWindowsInformationProtectionPolicyItemRequestBuilderGetQueryParameters } from './mdmWindowsInformationProtectionPolicyItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface MdmWindowsInformationProtectionPolicyItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: MdmWindowsInformationProtectionPolicyItemRequestBuilderGetQueryParameters | undefined;
}
