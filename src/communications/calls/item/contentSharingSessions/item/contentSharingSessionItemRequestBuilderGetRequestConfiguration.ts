import {ContentSharingSessionItemRequestBuilderGetQueryParameters} from './contentSharingSessionItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ContentSharingSessionItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ContentSharingSessionItemRequestBuilderGetQueryParameters | undefined;
}
