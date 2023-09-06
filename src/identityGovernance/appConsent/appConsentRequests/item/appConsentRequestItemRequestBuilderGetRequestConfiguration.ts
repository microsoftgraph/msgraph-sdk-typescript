import { type AppConsentRequestItemRequestBuilderGetQueryParameters } from './appConsentRequestItemRequestBuilderGetQueryParameters';
import { type RequestOption } from '@microsoft/kiota-abstractions';

export interface AppConsentRequestItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AppConsentRequestItemRequestBuilderGetQueryParameters | undefined;
}
