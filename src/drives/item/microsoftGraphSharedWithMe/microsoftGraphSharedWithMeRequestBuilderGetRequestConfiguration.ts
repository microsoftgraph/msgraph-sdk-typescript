import {MicrosoftGraphSharedWithMeRequestBuilderGetQueryParameters} from './microsoftGraphSharedWithMeRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class MicrosoftGraphSharedWithMeRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: MicrosoftGraphSharedWithMeRequestBuilderGetQueryParameters | undefined;
}
