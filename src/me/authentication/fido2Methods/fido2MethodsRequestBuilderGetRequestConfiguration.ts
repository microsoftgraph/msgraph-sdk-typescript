import { type Fido2MethodsRequestBuilderGetQueryParameters } from './fido2MethodsRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface Fido2MethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: Fido2MethodsRequestBuilderGetQueryParameters | undefined;
}
