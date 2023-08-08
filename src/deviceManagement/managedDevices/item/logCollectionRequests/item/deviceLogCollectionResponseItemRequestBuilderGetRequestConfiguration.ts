import {DeviceLogCollectionResponseItemRequestBuilderGetQueryParameters} from './deviceLogCollectionResponseItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface DeviceLogCollectionResponseItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: DeviceLogCollectionResponseItemRequestBuilderGetQueryParameters | undefined;
}
