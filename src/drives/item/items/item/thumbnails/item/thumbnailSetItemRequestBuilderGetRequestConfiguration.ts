import { type ThumbnailSetItemRequestBuilderGetQueryParameters } from './thumbnailSetItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface ThumbnailSetItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ThumbnailSetItemRequestBuilderGetQueryParameters | undefined;
}
