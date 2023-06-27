import {LicenseDetailsItemRequestBuilderGetQueryParameters} from './licenseDetailsItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface LicenseDetailsItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LicenseDetailsItemRequestBuilderGetQueryParameters | undefined;
}
