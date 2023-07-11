import {UserConsentRequestItemRequestBuilderGetQueryParameters} from './userConsentRequestItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

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
