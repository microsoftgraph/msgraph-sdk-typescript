import {OnlineMeetingsRequestBuilderGetQueryParameters} from './onlineMeetingsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OnlineMeetingsRequestBuilderGetQueryParameters | undefined;
}
