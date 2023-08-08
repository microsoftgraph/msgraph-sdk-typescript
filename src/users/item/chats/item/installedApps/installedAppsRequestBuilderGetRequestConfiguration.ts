import {InstalledAppsRequestBuilderGetQueryParameters} from './installedAppsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface InstalledAppsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: InstalledAppsRequestBuilderGetQueryParameters | undefined;
}
