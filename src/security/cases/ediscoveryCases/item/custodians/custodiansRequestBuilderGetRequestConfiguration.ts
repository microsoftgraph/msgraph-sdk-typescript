import {CustodiansRequestBuilderGetQueryParameters} from './custodiansRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface CustodiansRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: CustodiansRequestBuilderGetQueryParameters | undefined;
}
