import { type WindowsProtectionStateRequestBuilderGetQueryParameters } from './windowsProtectionStateRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface WindowsProtectionStateRequestBuilderGetRequestConfiguration {
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
    queryParameters?: WindowsProtectionStateRequestBuilderGetQueryParameters | undefined;
}
