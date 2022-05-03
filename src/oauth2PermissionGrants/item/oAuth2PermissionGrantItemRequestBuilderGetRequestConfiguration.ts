import {OAuth2PermissionGrantItemRequestBuilderGetQueryParameters} from './oAuth2PermissionGrantItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/** Configuration for the request such as headers, query parameters, and middleware options.  */
export class OAuth2PermissionGrantItemRequestBuilderGetRequestConfiguration {
    /** Request headers  */
    public headers?: Record<string, string> | undefined;
    /** Request options  */
    public options?: RequestOption[] | undefined;
    /** Request query parameters  */
    public queryParameters?: OAuth2PermissionGrantItemRequestBuilderGetQueryParameters | undefined;
}
