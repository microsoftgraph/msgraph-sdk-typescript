import { type IosManagedAppProtectionsRequestBuilderGetQueryParameters } from './iosManagedAppProtectionsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface IosManagedAppProtectionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: IosManagedAppProtectionsRequestBuilderGetQueryParameters | undefined;
}
