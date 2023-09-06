import { type OnlineMeetingsRequestBuilderGetQueryParameters } from './onlineMeetingsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

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
