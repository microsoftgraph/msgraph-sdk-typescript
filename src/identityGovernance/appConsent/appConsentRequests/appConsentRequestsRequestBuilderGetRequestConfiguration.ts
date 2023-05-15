import {AppConsentRequestsRequestBuilderGetQueryParameters} from './appConsentRequestsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface AppConsentRequestsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: AppConsentRequestsRequestBuilderGetQueryParameters | undefined;
}
