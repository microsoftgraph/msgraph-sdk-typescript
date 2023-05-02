import {Alerts_v2RequestBuilderGetQueryParameters} from './alerts_v2RequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface Alerts_v2RequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: Alerts_v2RequestBuilderGetQueryParameters | undefined;
}
