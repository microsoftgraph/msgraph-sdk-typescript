import {OAuth2PermissionGrantItemRequestBuilderGetQueryParameters} from './oAuth2PermissionGrantItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface OAuth2PermissionGrantItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: OAuth2PermissionGrantItemRequestBuilderGetQueryParameters | undefined;
}
