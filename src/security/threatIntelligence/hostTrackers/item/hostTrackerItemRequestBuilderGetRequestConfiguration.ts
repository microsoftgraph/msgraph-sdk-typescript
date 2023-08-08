import {HostTrackerItemRequestBuilderGetQueryParameters} from './hostTrackerItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface HostTrackerItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HostTrackerItemRequestBuilderGetQueryParameters | undefined;
}
