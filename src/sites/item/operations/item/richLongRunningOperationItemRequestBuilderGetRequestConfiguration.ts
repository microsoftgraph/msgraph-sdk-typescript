import {RichLongRunningOperationItemRequestBuilderGetQueryParameters} from './richLongRunningOperationItemRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface RichLongRunningOperationItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RichLongRunningOperationItemRequestBuilderGetQueryParameters | undefined;
}
