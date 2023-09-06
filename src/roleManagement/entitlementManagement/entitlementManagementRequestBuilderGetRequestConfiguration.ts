import { type EntitlementManagementRequestBuilderGetQueryParameters } from './entitlementManagementRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface EntitlementManagementRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EntitlementManagementRequestBuilderGetQueryParameters | undefined;
}
