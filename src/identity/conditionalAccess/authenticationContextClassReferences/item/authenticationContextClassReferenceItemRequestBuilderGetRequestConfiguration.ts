import { type AuthenticationContextClassReferenceItemRequestBuilderGetQueryParameters } from './authenticationContextClassReferenceItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationContextClassReferenceItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationContextClassReferenceItemRequestBuilderGetQueryParameters | undefined;
}
