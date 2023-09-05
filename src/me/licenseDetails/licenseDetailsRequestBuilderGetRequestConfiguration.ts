import { type LicenseDetailsRequestBuilderGetQueryParameters } from './licenseDetailsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface LicenseDetailsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: LicenseDetailsRequestBuilderGetQueryParameters | undefined;
}
