import {SubscribedSkusRequestBuilderGetQueryParameters} from './subscribedSkusRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface SubscribedSkusRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: SubscribedSkusRequestBuilderGetQueryParameters | undefined;
}
