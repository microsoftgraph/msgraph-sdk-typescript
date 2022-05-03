import {Fido2AuthenticationMethodItemRequestBuilderGetQueryParameters} from './fido2AuthenticationMethodItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

/** Configuration for the request such as headers, query parameters, and middleware options.  */
export class Fido2AuthenticationMethodItemRequestBuilderGetRequestConfiguration {
    /** Request headers  */
    public headers?: Record<string, string> | undefined;
    /** Request options  */
    public options?: RequestOption[] | undefined;
    /** Request query parameters  */
    public queryParameters?: Fido2AuthenticationMethodItemRequestBuilderGetQueryParameters | undefined;
}
