import {LastMessagePreviewRequestBuilderGetQueryParameters} from './lastMessagePreviewRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class LastMessagePreviewRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: LastMessagePreviewRequestBuilderGetQueryParameters | undefined;
}
