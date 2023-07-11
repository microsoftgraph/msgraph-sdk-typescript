import {ServiceManagementDetailsRequestBuilderGetQueryParameters} from './serviceManagementDetailsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ServiceManagementDetailsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ServiceManagementDetailsRequestBuilderGetQueryParameters | undefined;
}
