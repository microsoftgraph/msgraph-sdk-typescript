import {NamedLocationItemRequestBuilderGetQueryParameters} from './namedLocationItemRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface NamedLocationItemRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string[]> | undefined;
    /** Request options */
    options?: RequestOption[] | undefined;
    /** Request query parameters */
    queryParameters?: NamedLocationItemRequestBuilderGetQueryParameters | undefined;
}
