import {DecisionsRequestBuilderGetQueryParameters} from './decisionsRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DecisionsRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: DecisionsRequestBuilderGetQueryParameters | undefined;
}
