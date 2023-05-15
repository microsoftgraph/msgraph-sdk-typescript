import {ExchangeConnectorsRequestBuilderGetQueryParameters} from './exchangeConnectorsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface ExchangeConnectorsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: ExchangeConnectorsRequestBuilderGetQueryParameters | undefined;
}
