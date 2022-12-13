import {Oauth2PermissionGrantsRequestBuilderGetQueryParameters} from './oauth2PermissionGrantsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Configuration for the request such as headers, query parameters, and middleware options.
 */
export class Oauth2PermissionGrantsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    public headers?: Record<string, string[]> | undefined;
    /** Request options */
    public options?: RequestOption[] | undefined;
    /** Request query parameters */
    public queryParameters?: Oauth2PermissionGrantsRequestBuilderGetQueryParameters | undefined;
}
