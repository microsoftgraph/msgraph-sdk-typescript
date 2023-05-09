import {CustodianSourcesRequestBuilderGetQueryParameters} from './custodianSourcesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustodianSourcesRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: CustodianSourcesRequestBuilderGetQueryParameters | undefined;
}
