import {ContentSharingSessionsRequestBuilderGetQueryParameters} from './contentSharingSessionsRequestBuilderGetQueryParameters';
import type {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContentSharingSessionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ContentSharingSessionsRequestBuilderGetQueryParameters | undefined;
}
