import {MicrosoftGraphUserRequestBuilderGetQueryParameters} from './microsoftGraphUserRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class MicrosoftGraphUserRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: MicrosoftGraphUserRequestBuilderGetQueryParameters | undefined;
}
