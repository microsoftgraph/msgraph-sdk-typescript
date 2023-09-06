import { type UserConsentRequestItemRequestBuilderGetQueryParameters } from './userConsentRequestItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserConsentRequestItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserConsentRequestItemRequestBuilderGetQueryParameters | undefined;
}
