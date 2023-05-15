import {GraphApplicationRequestBuilderGetQueryParameters} from './graphApplicationRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface GraphApplicationRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: GraphApplicationRequestBuilderGetQueryParameters | undefined;
}
