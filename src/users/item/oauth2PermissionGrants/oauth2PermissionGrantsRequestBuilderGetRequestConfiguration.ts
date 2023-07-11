import {Oauth2PermissionGrantsRequestBuilderGetQueryParameters} from './oauth2PermissionGrantsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Oauth2PermissionGrantsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: Oauth2PermissionGrantsRequestBuilderGetQueryParameters | undefined;
}
